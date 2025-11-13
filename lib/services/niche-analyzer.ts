/**
 * AI Niche Analyzer Service
 * Uses Google Gemini API to analyze market niches and generate insights
 */

import type {
  AnalysisRequest,
  AnalysisResponse,
  NicheAnalysis,
  MarketMetrics,
  TrendData,
  CompetitionAnalysis,
  AppConcept,
  MonetizationStrategy,
  OpportunityRating,
  CompetitionLevel,
  TrendDirection,
} from '@/lib/types/niche-finder';

const GEMINI_API_ENDPOINT = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';

interface GeminiResponse {
  candidates?: Array<{
    content: {
      parts: Array<{ text: string }>;
    };
  }>;
  error?: {
    message: string;
  };
}

/**
 * Generate analysis prompt for Gemini
 */
function generatePrompt(request: AnalysisRequest): string {
  const { topic, industry, targetMarket, preferences } = request;

  return `You are an expert market analyst and business strategist. Analyze the following niche/topic for creating a profitable web app or website.

**Topic:** ${topic}
${industry ? `**Industry:** ${industry}` : ''}
${targetMarket ? `**Target Market:** ${targetMarket}` : ''}
${preferences ? `**Additional Preferences:** ${preferences}` : ''}

Provide a comprehensive market analysis in **valid JSON format only** (no markdown, no code blocks, just pure JSON). The response must follow this exact structure:

{
  "metrics": {
    "competitionScore": number (0-100),
    "trendScore": number (0-100),
    "opportunityScore": number (0-100),
    "overallScore": number (0-100)
  },
  "trendData": {
    "direction": "rising" | "stable" | "declining",
    "growthRate": string,
    "searchVolume": string,
    "seasonality": string,
    "futureOutlook": string
  },
  "competitionAnalysis": {
    "level": "low" | "medium" | "high",
    "numberOfCompetitors": string,
    "marketSaturation": string,
    "entryBarriers": [string array],
    "competitiveAdvantages": [string array]
  },
  "opportunityRating": "excellent" | "good" | "moderate" | "challenging",
  "marketSize": string,
  "targetAudience": [string array],
  "painPoints": [string array],
  "keywords": [string array of 10-15 relevant keywords],
  "appConcepts": [
    {
      "name": string,
      "tagline": string,
      "description": string,
      "coreFeatures": [string array of 5-8 features],
      "targetAudience": [string array],
      "uniqueSellingPoints": [string array],
      "technicalRequirements": [string array],
      "developmentTimeframe": string,
      "estimatedCost": string
    }
    // Include 2-3 app concepts
  ],
  "monetizationStrategies": [
    {
      "model": string,
      "description": string,
      "revenueStreams": [string array],
      "estimatedRevenue": string,
      "implementationDifficulty": "easy" | "medium" | "hard"
    }
    // Include 3-5 monetization strategies
  ],
  "keyInsights": [string array of 4-6 insights],
  "actionableSteps": [string array of 5-8 steps],
  "risks": [string array of 3-5 risks],
  "successFactors": [string array of 4-6 factors]
}

**Important Instructions:**
1. Return ONLY valid JSON (no markdown formatting, no code blocks, no extra text)
2. All scores must be realistic numbers between 0-100
3. Competition score: Lower = less competition (better)
4. Trend score: Higher = stronger upward trend (better)
5. Opportunity score: Higher = better opportunity (better)
6. Overall score: Weighted average considering all factors
7. Provide specific, actionable insights based on current market trends
8. App concepts should be innovative yet practical
9. Include diverse monetization strategies (subscription, one-time, freemium, etc.)
10. Be realistic about timelines and costs`;
}

/**
 * Parse and validate Gemini API response
 */
function parseGeminiResponse(response: GeminiResponse): string {
  if (response.error) {
    throw new Error(response.error.message);
  }

  if (!response.candidates || response.candidates.length === 0) {
    throw new Error('No response generated from AI');
  }

  const text = response.candidates[0].content.parts[0].text;

  // Remove markdown code blocks if present
  let cleanedText = text.trim();
  if (cleanedText.startsWith('```json')) {
    cleanedText = cleanedText.replace(/^```json\s*/, '').replace(/\s*```$/, '');
  } else if (cleanedText.startsWith('```')) {
    cleanedText = cleanedText.replace(/^```\s*/, '').replace(/\s*```$/, '');
  }

  return cleanedText.trim();
}

/**
 * Validate and sanitize analysis data
 */
function validateAnalysisData(data: unknown): Partial<Omit<NicheAnalysis, 'id' | 'topic' | 'timestamp'>> {
  const parsed = data as Partial<Omit<NicheAnalysis, 'id' | 'topic' | 'timestamp'>>;

  // Ensure metrics are within valid ranges
  if (parsed.metrics) {
    parsed.metrics.competitionScore = Math.max(0, Math.min(100, parsed.metrics.competitionScore || 50));
    parsed.metrics.trendScore = Math.max(0, Math.min(100, parsed.metrics.trendScore || 50));
    parsed.metrics.opportunityScore = Math.max(0, Math.min(100, parsed.metrics.opportunityScore || 50));
    parsed.metrics.overallScore = Math.max(0, Math.min(100, parsed.metrics.overallScore || 50));
  }

  return parsed;
}

/**
 * Call Gemini API to analyze niche
 */
async function callGeminiAPI(prompt: string, apiKey: string): Promise<string> {
  const url = `${GEMINI_API_ENDPOINT}?key=${apiKey}`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      contents: [
        {
          parts: [{ text: prompt }],
        },
      ],
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 8192,
      },
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      errorData.error?.message || `API request failed: ${response.status} ${response.statusText}`
    );
  }

  const data: GeminiResponse = await response.json();
  return parseGeminiResponse(data);
}

/**
 * Main function to analyze a niche
 */
export async function analyzeNiche(request: AnalysisRequest): Promise<AnalysisResponse> {
  try {
    // Validate input
    if (!request.topic || request.topic.trim().length === 0) {
      return {
        success: false,
        error: 'Please enter a topic to analyze',
      };
    }

    if (!request.apiKey || request.apiKey.trim().length === 0) {
      return {
        success: false,
        error: 'Please provide a Gemini API key',
      };
    }

    // Generate prompt
    const prompt = generatePrompt(request);

    // Call Gemini API
    const responseText = await callGeminiAPI(prompt, request.apiKey);

    // Parse JSON response
    let parsedData;
    try {
      parsedData = JSON.parse(responseText);
    } catch (parseError) {
      console.error('Failed to parse JSON:', responseText);
      throw new Error('Failed to parse AI response. Please try again.');
    }

    // Validate and sanitize data
    const validatedData = validateAnalysisData(parsedData);

    // Create complete analysis object
    const analysis: NicheAnalysis = {
      id: `analysis-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      topic: request.topic,
      timestamp: Date.now(),
      metrics: validatedData.metrics || {
        competitionScore: 50,
        trendScore: 50,
        opportunityScore: 50,
        overallScore: 50,
      },
      trendData: validatedData.trendData || {
        direction: 'stable' as TrendDirection,
        growthRate: 'Moderate',
        searchVolume: 'Medium',
        seasonality: 'Not significant',
        futureOutlook: 'Stable',
      },
      competitionAnalysis: validatedData.competitionAnalysis || {
        level: 'medium' as CompetitionLevel,
        numberOfCompetitors: 'Moderate',
        marketSaturation: 'Medium',
        entryBarriers: ['Standard market entry challenges'],
        competitiveAdvantages: ['Innovation', 'User experience'],
      },
      opportunityRating: validatedData.opportunityRating || ('moderate' as OpportunityRating),
      marketSize: validatedData.marketSize || 'Medium',
      targetAudience: validatedData.targetAudience || [],
      painPoints: validatedData.painPoints || [],
      keywords: validatedData.keywords || [],
      appConcepts: validatedData.appConcepts || [],
      monetizationStrategies: validatedData.monetizationStrategies || [],
      keyInsights: validatedData.keyInsights || [],
      actionableSteps: validatedData.actionableSteps || [],
      risks: validatedData.risks || [],
      successFactors: validatedData.successFactors || [],
    };

    return {
      success: true,
      data: analysis,
    };
  } catch (error) {
    console.error('Error analyzing niche:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'An unexpected error occurred',
    };
  }
}

/**
 * Get sample analysis for demo purposes
 */
export function getSampleAnalysis(topic: string): NicheAnalysis {
  return {
    id: `sample-${Date.now()}`,
    topic,
    timestamp: Date.now(),
    metrics: {
      competitionScore: 35,
      trendScore: 85,
      opportunityScore: 78,
      overallScore: 76,
    },
    trendData: {
      direction: 'rising',
      growthRate: '15-20% annually',
      searchVolume: 'High (50K+ monthly searches)',
      seasonality: 'Consistent year-round with Q1 peaks',
      futureOutlook: 'Strong growth expected due to digital transformation trends',
    },
    competitionAnalysis: {
      level: 'medium',
      numberOfCompetitors: 'Moderate (20-50 established players)',
      marketSaturation: 'Medium - room for innovation',
      entryBarriers: [
        'Technical expertise required',
        'Initial marketing investment',
        'Building user trust',
      ],
      competitiveAdvantages: [
        'AI-powered features',
        'Superior UX/UI design',
        'Niche specialization',
        'Better pricing model',
      ],
    },
    opportunityRating: 'good',
    marketSize: '$2-5 billion globally',
    targetAudience: [
      'Small business owners',
      'Entrepreneurs',
      'Freelancers',
      'Marketing professionals',
    ],
    painPoints: [
      'Time-consuming manual processes',
      'Lack of technical knowledge',
      'High costs of existing solutions',
      'Poor user experience in current tools',
    ],
    keywords: [
      topic.toLowerCase(),
      'automation tool',
      'saas platform',
      'business software',
      'productivity app',
      'workflow management',
      'digital solution',
      'online tool',
      'web application',
      'cloud software',
    ],
    appConcepts: [
      {
        name: `${topic} Pro`,
        tagline: 'Streamline your workflow with AI-powered automation',
        description: 'An intelligent platform that helps users automate complex workflows with minimal setup',
        coreFeatures: [
          'AI-powered automation builder',
          'Drag-and-drop workflow designer',
          'Pre-built templates library',
          'Real-time analytics dashboard',
          'Integration with 100+ apps',
          'Mobile companion app',
          'Collaborative team features',
        ],
        targetAudience: ['SMBs', 'Solopreneurs', 'Marketing teams'],
        uniqueSellingPoints: [
          'No-code solution with AI assistance',
          '80% faster setup than competitors',
          'Affordable pricing for small businesses',
        ],
        technicalRequirements: [
          'React/Next.js frontend',
          'Node.js backend',
          'PostgreSQL database',
          'AI/ML integration (OpenAI/Gemini)',
          'OAuth integrations',
        ],
        developmentTimeframe: '4-6 months MVP',
        estimatedCost: '$30,000 - $60,000',
      },
    ],
    monetizationStrategies: [
      {
        model: 'Freemium Subscription',
        description: 'Free tier with limited features, paid tiers for advanced functionality',
        revenueStreams: ['Monthly subscriptions', 'Annual plans with discount', 'Enterprise custom pricing'],
        estimatedRevenue: '$10-50K MRR within first year',
        implementationDifficulty: 'medium',
      },
      {
        model: 'Pay-per-use',
        description: 'Charge based on usage metrics (API calls, automations, etc.)',
        revenueStreams: ['Credit-based system', 'Volume discounts'],
        estimatedRevenue: '$5-30K MRR within first year',
        implementationDifficulty: 'easy',
      },
    ],
    keyInsights: [
      'Market shows strong growth trajectory with increasing digital adoption',
      'Current solutions are either too complex or too limited',
      'AI integration is becoming a must-have feature',
      'Users willing to pay premium for time-saving automation',
    ],
    actionableSteps: [
      'Validate idea with 20-30 target user interviews',
      'Build MVP focusing on core automation features',
      'Create content marketing strategy targeting pain points',
      'Launch beta with early adopter pricing',
      'Iterate based on user feedback',
      'Build integration partnerships',
    ],
    risks: [
      'Competitive market requires strong differentiation',
      'Technical complexity may increase development time',
      'User acquisition costs can be high',
    ],
    successFactors: [
      'Strong product-market fit',
      'Exceptional user experience',
      'Effective content marketing',
      'Strategic partnerships',
      'Rapid iteration based on feedback',
    ],
  };
}
