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
import { Sparkles, Search, Lightbulb, Key, Loader2, Shield, Eye, EyeOff, Trash2, AlertTriangle } from 'lucide-react';

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
  const [showApiKeyValue, setShowApiKeyValue] = useState(false);
  const [autoClearKey, setAutoClearKey] = useState(false);
  const [showSecurityWarning, setShowSecurityWarning] = useState(true);

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

      // Auto-clear API key if enabled
      if (autoClearKey && apiKey) {
        setTimeout(() => {
          setApiKey('');
          setShowApiKeyValue(false);
        }, 1000);
      }
    } else {
      setError(result.error || 'Failed to analyze niche');
    }
  };

  const handleClearApiKey = () => {
    setApiKey('');
    setShowApiKeyValue(false);
  };

  const maskApiKey = (key: string): string => {
    if (!key || key.length < 8) return key;
    const firstFour = key.substring(0, 4);
    const lastFour = key.substring(key.length - 4);
    const masked = '*'.repeat(Math.max(0, key.length - 8));
    return `${firstFour}${masked}${lastFour}`;
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
        {/* Security Warning */}
        {showSecurityWarning && (
          <div className="bg-amber-50 border-2 border-amber-300 rounded-lg p-4 relative">
            <button
              onClick={() => setShowSecurityWarning(false)}
              className="absolute top-2 right-2 text-amber-600 hover:text-amber-800"
              aria-label="Dismiss warning"
            >
              ×
            </button>
            <div className="flex items-start gap-3">
              <Shield className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-amber-900 mb-1">
                  Security Notice
                </h4>
                <ul className="text-xs text-amber-800 space-y-1">
                  <li>• Your API key is stored locally in your browser only</li>
                  <li>• Never share your API key with anyone</li>
                  <li>• This app runs entirely in your browser - no server storage</li>
                  <li>• Enable "Auto-clear" to remove key after each use</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* API Key Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-300 rounded-lg p-4">
          <button
            onClick={() => setShowApiKey(!showApiKey)}
            className="flex items-center gap-2 text-sm font-medium text-blue-900 mb-2 w-full hover:text-blue-700 transition-colors"
          >
            <Key className="h-4 w-4" />
            Google Gemini API Key
            <span className="text-xs text-blue-700 ml-auto flex items-center gap-1">
              {apiKey ? (
                <>
                  <Shield className="h-3 w-3" />
                  Secured
                </>
              ) : (
                'Click to configure'
              )}
            </span>
          </button>

          {showApiKey && (
            <div className="mt-3 space-y-3">
              {/* API Key Input */}
              <div className="relative">
                <Input
                  type={showApiKeyValue ? 'text' : 'password'}
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  placeholder="Enter your Gemini API key"
                  helperText="Your key is stored securely in browser session storage"
                  className="pr-20"
                />
                <div className="absolute right-2 top-8 flex gap-1">
                  <button
                    type="button"
                    onClick={() => setShowApiKeyValue(!showApiKeyValue)}
                    className="p-1.5 hover:bg-gray-200 rounded transition-colors"
                    title={showApiKeyValue ? 'Hide API key' : 'Show API key'}
                  >
                    {showApiKeyValue ? (
                      <EyeOff className="h-4 w-4 text-gray-600" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-600" />
                    )}
                  </button>
                  {apiKey && (
                    <button
                      type="button"
                      onClick={handleClearApiKey}
                      className="p-1.5 hover:bg-red-100 rounded transition-colors"
                      title="Clear API key"
                    >
                      <Trash2 className="h-4 w-4 text-red-600" />
                    </button>
                  )}
                </div>
              </div>

              {/* API Key Preview (masked) */}
              {apiKey && (
                <div className="bg-white border border-blue-200 rounded p-2 text-xs">
                  <span className="text-gray-600">Stored key: </span>
                  <code className="text-blue-800 font-mono">{maskApiKey(apiKey)}</code>
                </div>
              )}

              {/* Auto-clear Option */}
              <label className="flex items-center gap-2 text-xs text-gray-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={autoClearKey}
                  onChange={(e) => setAutoClearKey(e.target.checked)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <Shield className="h-3 w-3 text-green-600" />
                <span>Auto-clear API key after each analysis (recommended)</span>
              </label>

              {/* Links */}
              <div className="flex flex-col gap-1 pt-2 border-t border-blue-200">
                <a
                  href="https://makersuite.google.com/app/apikey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-600 hover:underline"
                >
                  → Get free API key from Google AI Studio
                </a>
                <a
                  href="https://ai.google.dev/gemini-api/docs/api-key"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-blue-600 hover:underline"
                >
                  → Learn about API key security
                </a>
              </div>

              {/* Security Tips */}
              <div className="bg-green-50 border border-green-200 rounded p-2">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="h-3 w-3 text-green-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs text-green-800">
                    <strong>Security Tips:</strong>
                    <ul className="mt-1 space-y-0.5 ml-3 list-disc">
                      <li>Rotate your API key regularly</li>
                      <li>Set usage limits in Google Cloud Console</li>
                      <li>Never commit API keys to version control</li>
                    </ul>
                  </div>
                </div>
              </div>
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
