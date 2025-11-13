/**
 * Niche Analysis Panel Component
 * Displays comprehensive analysis results
 */

'use client';

import { useNicheFinderStore } from '@/lib/stores/niche-finder-store';
import { NicheInsightsCards } from './NicheInsightsCards';
import {
  TrendingUp,
  Target,
  Users,
  DollarSign,
  Lightbulb,
  CheckCircle2,
  AlertTriangle,
  Award,
  Search,
  Calendar,
  Code,
  Zap,
} from 'lucide-react';
import type { AppConcept, MonetizationStrategy } from '@/lib/types/niche-finder';

export function NicheAnalysisPanel() {
  const { currentAnalysis, error } = useNicheFinderStore();

  if (error) {
    return (
      <div className="h-full flex items-center justify-center bg-white rounded-lg border border-gray-200 p-6">
        <div className="text-center max-w-md">
          <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Analysis Failed</h3>
          <p className="text-sm text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  if (!currentAnalysis) {
    return (
      <div className="h-full flex items-center justify-center bg-white rounded-lg border border-gray-200 p-6">
        <div className="text-center max-w-md">
          <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Ready to Discover</h3>
          <p className="text-sm text-gray-600 mb-4">
            Enter a topic on the left to get instant market analysis and profitable app ideas
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-left">
            <h4 className="text-sm font-semibold text-blue-900 mb-2">You'll get:</h4>
            <ul className="text-xs text-blue-800 space-y-1">
              <li>✓ Competition and trend scores</li>
              <li>✓ Market opportunity ratings</li>
              <li>✓ Complete app concepts with features</li>
              <li>✓ Monetization strategies</li>
              <li>✓ Actionable next steps</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  const analysis = currentAnalysis;

  return (
    <div className="h-full overflow-y-auto bg-white rounded-lg border border-gray-200">
      <div className="p-6">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{analysis.topic}</h2>
          <p className="text-sm text-gray-500">
            Analysis generated on {new Date(analysis.timestamp).toLocaleDateString()}
          </p>
        </div>

        {/* Metrics Cards */}
        <NicheInsightsCards
          metrics={analysis.metrics}
          competitionLevel={analysis.competitionAnalysis.level}
          trendDirection={analysis.trendData.direction}
          opportunityRating={analysis.opportunityRating}
        />

        {/* Market Overview */}
        <section className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-blue-600" />
            Market Overview
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-2">Market Size</h4>
              <p className="text-gray-900">{analysis.marketSize}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-2">Growth Rate</h4>
              <p className="text-gray-900">{analysis.trendData.growthRate}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-2">Search Volume</h4>
              <p className="text-gray-900">{analysis.trendData.searchVolume}</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-2">Market Saturation</h4>
              <p className="text-gray-900">{analysis.competitionAnalysis.marketSaturation}</p>
            </div>
          </div>
        </section>

        {/* Target Audience */}
        {analysis.targetAudience.length > 0 && (
          <section className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Users className="h-5 w-5 text-purple-600" />
              Target Audience
            </h3>
            <div className="flex flex-wrap gap-2">
              {analysis.targetAudience.map((audience, index) => (
                <span
                  key={index}
                  className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {audience}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Key Insights */}
        {analysis.keyInsights.length > 0 && (
          <section className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-yellow-600" />
              Key Insights
            </h3>
            <ul className="space-y-2">
              {analysis.keyInsights.map((insight, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{insight}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* App Concepts */}
        {analysis.appConcepts.length > 0 && (
          <section className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Code className="h-5 w-5 text-blue-600" />
              App Concepts
            </h3>
            <div className="space-y-6">
              {analysis.appConcepts.map((concept, index) => (
                <AppConceptCard key={index} concept={concept} />
              ))}
            </div>
          </section>
        )}

        {/* Monetization Strategies */}
        {analysis.monetizationStrategies.length > 0 && (
          <section className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-green-600" />
              Monetization Strategies
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {analysis.monetizationStrategies.map((strategy, index) => (
                <MonetizationCard key={index} strategy={strategy} />
              ))}
            </div>
          </section>
        )}

        {/* Actionable Steps */}
        {analysis.actionableSteps.length > 0 && (
          <section className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-blue-600" />
              Actionable Steps
            </h3>
            <ol className="space-y-3">
              {analysis.actionableSteps.map((step, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white text-sm font-semibold flex items-center justify-center">
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{step}</span>
                </li>
              ))}
            </ol>
          </section>
        )}

        {/* Risks */}
        {analysis.risks.length > 0 && (
          <section className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-orange-600" />
              Potential Risks
            </h3>
            <ul className="space-y-2">
              {analysis.risks.map((risk, index) => (
                <li key={index} className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{risk}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Success Factors */}
        {analysis.successFactors.length > 0 && (
          <section className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Award className="h-5 w-5 text-yellow-600" />
              Success Factors
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {analysis.successFactors.map((factor, index) => (
                <div key={index} className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <span className="text-green-900 text-sm">{factor}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Keywords */}
        {analysis.keywords.length > 0 && (
          <section className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Search className="h-5 w-5 text-gray-600" />
              Relevant Keywords
            </h3>
            <div className="flex flex-wrap gap-2">
              {analysis.keywords.map((keyword, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

// App Concept Card Component
function AppConceptCard({ concept }: { concept: AppConcept }) {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6">
      <div className="mb-4">
        <h4 className="text-2xl font-bold text-gray-900 mb-1">{concept.name}</h4>
        <p className="text-purple-700 font-medium italic">{concept.tagline}</p>
      </div>

      <p className="text-gray-700 mb-4">{concept.description}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <h5 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1">
            <Zap className="h-4 w-4" />
            Core Features
          </h5>
          <ul className="space-y-1">
            {concept.coreFeatures.map((feature, idx) => (
              <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-1">
            <Award className="h-4 w-4" />
            Unique Selling Points
          </h5>
          <ul className="space-y-1">
            {concept.uniqueSellingPoints.map((usp, idx) => (
              <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                <span className="text-purple-600">•</span>
                <span>{usp}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 pt-4 border-t border-blue-200">
        <div className="bg-white rounded p-3">
          <div className="flex items-center gap-2 mb-1">
            <Calendar className="h-4 w-4 text-gray-500" />
            <span className="text-xs font-semibold text-gray-700">Timeline</span>
          </div>
          <p className="text-sm text-gray-900">{concept.developmentTimeframe}</p>
        </div>
        <div className="bg-white rounded p-3">
          <div className="flex items-center gap-2 mb-1">
            <DollarSign className="h-4 w-4 text-gray-500" />
            <span className="text-xs font-semibold text-gray-700">Est. Cost</span>
          </div>
          <p className="text-sm text-gray-900">{concept.estimatedCost}</p>
        </div>
      </div>
    </div>
  );
}

// Monetization Card Component
function MonetizationCard({ strategy }: { strategy: MonetizationStrategy }) {
  const getDifficultyColor = (difficulty: string) => {
    if (difficulty === 'easy') return 'bg-green-100 text-green-800';
    if (difficulty === 'medium') return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  return (
    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h4 className="text-lg font-bold text-gray-900">{strategy.model}</h4>
          <p className="text-sm text-gray-600 mt-1">{strategy.description}</p>
        </div>
        <span className={`px-2 py-1 rounded text-xs font-semibold ${getDifficultyColor(strategy.implementationDifficulty)}`}>
          {strategy.implementationDifficulty}
        </span>
      </div>

      <div className="mb-3">
        <h5 className="text-sm font-semibold text-gray-700 mb-1">Revenue Streams:</h5>
        <ul className="space-y-1">
          {strategy.revenueStreams.map((stream, idx) => (
            <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
              <DollarSign className="h-3 w-3 text-green-600" />
              {stream}
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-3 border-t border-green-200">
        <span className="text-xs text-gray-600">Estimated Revenue: </span>
        <span className="text-sm font-semibold text-green-700">{strategy.estimatedRevenue}</span>
      </div>
    </div>
  );
}
