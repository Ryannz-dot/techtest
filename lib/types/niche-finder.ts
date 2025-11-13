/**
 * Type definitions for AI Niche Finder
 */

export type CompetitionLevel = 'low' | 'medium' | 'high';
export type OpportunityRating = 'excellent' | 'good' | 'moderate' | 'challenging';
export type TrendDirection = 'rising' | 'stable' | 'declining';

export interface MarketMetrics {
  competitionScore: number; // 0-100
  trendScore: number; // 0-100
  opportunityScore: number; // 0-100
  overallScore: number; // 0-100
}

export interface TrendData {
  direction: TrendDirection;
  growthRate: string;
  searchVolume: string;
  seasonality: string;
  futureOutlook: string;
}

export interface CompetitionAnalysis {
  level: CompetitionLevel;
  numberOfCompetitors: string;
  marketSaturation: string;
  entryBarriers: string[];
  competitiveAdvantages: string[];
}

export interface MonetizationStrategy {
  model: string;
  description: string;
  revenueStreams: string[];
  estimatedRevenue: string;
  implementationDifficulty: 'easy' | 'medium' | 'hard';
}

export interface AppConcept {
  name: string;
  tagline: string;
  description: string;
  coreFeatures: string[];
  targetAudience: string[];
  uniqueSellingPoints: string[];
  technicalRequirements: string[];
  developmentTimeframe: string;
  estimatedCost: string;
}

export interface NicheAnalysis {
  id: string;
  topic: string;
  timestamp: number;

  // Metrics
  metrics: MarketMetrics;

  // Detailed Analysis
  trendData: TrendData;
  competitionAnalysis: CompetitionAnalysis;
  opportunityRating: OpportunityRating;

  // Market Insights
  marketSize: string;
  targetAudience: string[];
  painPoints: string[];
  keywords: string[];

  // App Concepts
  appConcepts: AppConcept[];

  // Monetization
  monetizationStrategies: MonetizationStrategy[];

  // Recommendations
  keyInsights: string[];
  actionableSteps: string[];
  risks: string[];
  successFactors: string[];
}

export interface NicheFinderFormData {
  topic: string;
  industry?: string;
  targetMarket?: string;
  preferences?: string;
}

export interface NicheFinderState {
  // Form data
  formData: NicheFinderFormData;

  // Analysis results
  currentAnalysis: NicheAnalysis | null;
  analysisHistory: NicheAnalysis[];

  // UI state
  isAnalyzing: boolean;
  error: string | null;

  // API keys (stored in sessionStorage)
  apiKey: string;

  // Actions
  updateFormData: (field: keyof NicheFinderFormData, value: string) => void;
  setApiKey: (key: string) => void;
  setAnalysis: (analysis: NicheAnalysis) => void;
  setAnalyzing: (isAnalyzing: boolean) => void;
  setError: (error: string | null) => void;
  addToHistory: (analysis: NicheAnalysis) => void;
  clearHistory: () => void;
  reset: () => void;
}

export interface AnalysisRequest {
  topic: string;
  industry?: string;
  targetMarket?: string;
  preferences?: string;
  apiKey: string;
}

export interface AnalysisResponse {
  success: boolean;
  data?: NicheAnalysis;
  error?: string;
}
