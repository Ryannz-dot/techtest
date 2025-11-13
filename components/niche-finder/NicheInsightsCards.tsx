/**
 * Niche Insights Cards Component
 * Displays metrics and scores in a visual card layout
 */

'use client';

import type { MarketMetrics, CompetitionLevel, TrendDirection, OpportunityRating } from '@/lib/types/niche-finder';
import { TrendingUp, TrendingDown, Minus, Target, BarChart3, Award } from 'lucide-react';

interface NicheInsightsCardsProps {
  metrics: MarketMetrics;
  competitionLevel: CompetitionLevel;
  trendDirection: TrendDirection;
  opportunityRating: OpportunityRating;
}

export function NicheInsightsCards({
  metrics,
  competitionLevel,
  trendDirection,
  opportunityRating,
}: NicheInsightsCardsProps) {
  const getScoreColor = (score: number): string => {
    if (score >= 70) return 'text-green-600';
    if (score >= 40) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBgColor = (score: number): string => {
    if (score >= 70) return 'bg-green-50 border-green-200';
    if (score >= 40) return 'bg-yellow-50 border-yellow-200';
    return 'bg-red-50 border-red-200';
  };

  const getCompetitionColor = (level: CompetitionLevel): string => {
    if (level === 'low') return 'text-green-600 bg-green-50 border-green-200';
    if (level === 'medium') return 'text-yellow-600 bg-yellow-50 border-yellow-200';
    return 'text-red-600 bg-red-50 border-red-200';
  };

  const getTrendIcon = (direction: TrendDirection) => {
    if (direction === 'rising') return <TrendingUp className="h-6 w-6 text-green-600" />;
    if (direction === 'declining') return <TrendingDown className="h-6 w-6 text-red-600" />;
    return <Minus className="h-6 w-6 text-yellow-600" />;
  };

  const getOpportunityColor = (rating: OpportunityRating): string => {
    if (rating === 'excellent') return 'text-green-600 bg-green-50 border-green-200';
    if (rating === 'good') return 'text-blue-600 bg-blue-50 border-blue-200';
    if (rating === 'moderate') return 'text-yellow-600 bg-yellow-50 border-yellow-200';
    return 'text-orange-600 bg-orange-50 border-orange-200';
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {/* Overall Score */}
      <div className={`rounded-lg border-2 p-4 ${getScoreBgColor(metrics.overallScore)}`}>
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-medium text-gray-700">Overall Score</h3>
          <Award className="h-5 w-5 text-gray-400" />
        </div>
        <div className={`text-3xl font-bold ${getScoreColor(metrics.overallScore)}`}>
          {metrics.overallScore}
          <span className="text-lg">/100</span>
        </div>
        <p className="text-xs text-gray-600 mt-1">
          {metrics.overallScore >= 70
            ? 'Excellent opportunity'
            : metrics.overallScore >= 40
            ? 'Moderate potential'
            : 'Challenging market'}
        </p>
      </div>

      {/* Competition Score */}
      <div className={`rounded-lg border-2 p-4 ${getCompetitionColor(competitionLevel)}`}>
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-medium text-gray-700">Competition</h3>
          <Target className="h-5 w-5 text-gray-400" />
        </div>
        <div className="text-2xl font-bold capitalize mb-1">{competitionLevel}</div>
        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
          <div
            className={`h-2 rounded-full ${
              competitionLevel === 'low'
                ? 'bg-green-600'
                : competitionLevel === 'medium'
                ? 'bg-yellow-600'
                : 'bg-red-600'
            }`}
            style={{
              width: `${100 - metrics.competitionScore}%`,
            }}
          />
        </div>
        <p className="text-xs text-gray-600 mt-1">
          {competitionLevel === 'low'
            ? 'Easy to enter'
            : competitionLevel === 'medium'
            ? 'Moderate barriers'
            : 'High barriers'}
        </p>
      </div>

      {/* Trend Score */}
      <div
        className={`rounded-lg border-2 p-4 ${
          trendDirection === 'rising'
            ? 'bg-green-50 border-green-200'
            : trendDirection === 'declining'
            ? 'bg-red-50 border-red-200'
            : 'bg-yellow-50 border-yellow-200'
        }`}
      >
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-medium text-gray-700">Market Trend</h3>
          {getTrendIcon(trendDirection)}
        </div>
        <div className="text-2xl font-bold capitalize mb-1">{trendDirection}</div>
        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
          <div
            className={`h-2 rounded-full ${
              trendDirection === 'rising'
                ? 'bg-green-600'
                : trendDirection === 'declining'
                ? 'bg-red-600'
                : 'bg-yellow-600'
            }`}
            style={{
              width: `${metrics.trendScore}%`,
            }}
          />
        </div>
        <p className="text-xs text-gray-600 mt-1">Growth trajectory</p>
      </div>

      {/* Opportunity Rating */}
      <div className={`rounded-lg border-2 p-4 ${getOpportunityColor(opportunityRating)}`}>
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-medium text-gray-700">Opportunity</h3>
          <BarChart3 className="h-5 w-5 text-gray-400" />
        </div>
        <div className="text-2xl font-bold capitalize mb-1">{opportunityRating}</div>
        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
          <div
            className={`h-2 rounded-full ${
              opportunityRating === 'excellent'
                ? 'bg-green-600'
                : opportunityRating === 'good'
                ? 'bg-blue-600'
                : opportunityRating === 'moderate'
                ? 'bg-yellow-600'
                : 'bg-orange-600'
            }`}
            style={{
              width: `${metrics.opportunityScore}%`,
            }}
          />
        </div>
        <p className="text-xs text-gray-600 mt-1">Market potential</p>
      </div>
    </div>
  );
}
