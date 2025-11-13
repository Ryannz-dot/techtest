/**
 * Niche Finder Form Component
 * Input form for entering topic and preferences
 */

'use client';

import { useState } from 'react';
import { useNicheFinderStore } from '@/lib/stores/niche-finder-store';
import { analyzeNiche, getSampleAnalysis } from '@/lib/services/niche-analyzer';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import { Sparkles, Search, Lightbulb, Key, Loader2 } from 'lucide-react';

export function NicheFinderForm() {
  const {
    formData,
    apiKey,
    isAnalyzing,
    updateFormData,
    setApiKey,
    setAnalysis,
    setAnalyzing,
    setError,
    addToHistory,
  } = useNicheFinderStore();

  const [showApiKey, setShowApiKey] = useState(false);

  const handleAnalyze = async () => {
    if (!formData.topic.trim()) {
      setError('Please enter a topic to analyze');
      return;
    }

    setAnalyzing(true);
    setError(null);

    const result = await analyzeNiche({
      topic: formData.topic,
      industry: formData.industry,
      targetMarket: formData.targetMarket,
      preferences: formData.preferences,
      apiKey,
    });

    setAnalyzing(false);

    if (result.success && result.data) {
      setAnalysis(result.data);
      addToHistory(result.data);
    } else {
      setError(result.error || 'Failed to analyze niche');
    }
  };

  const handleLoadSample = () => {
    const sampleTopic = formData.topic.trim() || 'AI-powered task automation';
    const sample = getSampleAnalysis(sampleTopic);
    setAnalysis(sample);
    addToHistory(sample);
    updateFormData('topic', sampleTopic);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey && formData.topic.trim()) {
      e.preventDefault();
      handleAnalyze();
    }
  };

  return (
    <div className="h-full flex flex-col bg-white rounded-lg border border-gray-200 p-6">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="h-6 w-6 text-purple-600" />
          <h2 className="text-2xl font-bold text-gray-900">AI Niche Finder</h2>
        </div>
        <p className="text-sm text-gray-600">
          Discover profitable web app ideas with instant market analysis
        </p>
      </div>

      <div className="flex-1 overflow-y-auto space-y-4">
        {/* API Key Section */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <button
            onClick={() => setShowApiKey(!showApiKey)}
            className="flex items-center gap-2 text-sm font-medium text-blue-900 mb-2 w-full"
          >
            <Key className="h-4 w-4" />
            Google Gemini API Key
            <span className="text-xs text-blue-700 ml-auto">
              {apiKey ? '✓ Configured' : 'Click to configure'}
            </span>
          </button>

          {showApiKey && (
            <div className="mt-2">
              <Input
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="Enter your Gemini API key"
                helperText="Get your free API key from Google AI Studio"
              />
              <a
                href="https://makersuite.google.com/app/apikey"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-600 hover:underline mt-1 inline-block"
              >
                Get free API key →
              </a>
            </div>
          )}
        </div>

        {/* Topic Input */}
        <div>
          <Input
            label="Topic or Niche"
            value={formData.topic}
            onChange={(e) => updateFormData('topic', e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="e.g., AI-powered fitness tracking, Local business marketing, etc."
            required
            helperText="Enter any topic you want to analyze"
          />
        </div>

        {/* Industry */}
        <div>
          <Input
            label="Industry (Optional)"
            value={formData.industry || ''}
            onChange={(e) => updateFormData('industry', e.target.value)}
            placeholder="e.g., SaaS, E-commerce, Healthcare"
            helperText="Specify the industry for more targeted analysis"
          />
        </div>

        {/* Target Market */}
        <div>
          <Input
            label="Target Market (Optional)"
            value={formData.targetMarket || ''}
            onChange={(e) => updateFormData('targetMarket', e.target.value)}
            placeholder="e.g., Small businesses, Freelancers, Students"
            helperText="Who is your target audience?"
          />
        </div>

        {/* Additional Preferences */}
        <div>
          <Textarea
            label="Additional Preferences (Optional)"
            value={formData.preferences || ''}
            onChange={(e) => updateFormData('preferences', e.target.value)}
            placeholder="e.g., Focus on subscription models, mobile-first, low competition..."
            rows={3}
            helperText="Any specific requirements or preferences"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 space-y-3">
        <button
          onClick={handleAnalyze}
          disabled={isAnalyzing || !formData.topic.trim()}
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-all"
        >
          {isAnalyzing ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Analyzing...
            </>
          ) : (
            <>
              <Search className="h-5 w-5" />
              Analyze Niche
            </>
          )}
        </button>

        <button
          onClick={handleLoadSample}
          disabled={isAnalyzing}
          className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-all"
        >
          <Lightbulb className="h-4 w-4" />
          Load Sample Analysis
        </button>
      </div>

      {/* Instructions */}
      <div className="mt-4 p-3 bg-gray-50 rounded-lg">
        <h4 className="text-xs font-semibold text-gray-700 mb-1">How it works:</h4>
        <ol className="text-xs text-gray-600 space-y-1 list-decimal list-inside">
          <li>Enter your topic or niche idea</li>
          <li>Optionally specify industry and target market</li>
          <li>Click "Analyze Niche" to get instant insights</li>
          <li>Review scores, trends, and app concepts</li>
        </ol>
      </div>
    </div>
  );
}
