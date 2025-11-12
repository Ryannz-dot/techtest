'use client';

import { useState } from 'react';
import { useBuilderStore } from '@/lib/stores/builder-store';
import CollapsibleSection from '@/components/ui/CollapsibleSection';
import Input from '@/components/ui/Input';
import { Key, Eye, EyeOff } from 'lucide-react';

export default function APIKeysSection() {
  const { apiKeys, setAPIKeys } = useBuilderStore();
  const [showKeys, setShowKeys] = useState<Record<string, boolean>>({});

  const toggleShowKey = (key: string) => {
    setShowKeys(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleKeyChange = (key: string, value: string) => {
    setAPIKeys({ ...apiKeys, [key]: value });
  };

  return (
    <CollapsibleSection
      title="API Keys Setup"
      description="Add your API keys to unlock advanced features. All keys are stored locally in your browser and never sent to our servers."
      badge="Optional"
      defaultOpen={false}
    >
      <div className="space-y-4">
        {/* Gemini API */}
        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
          <div className="flex items-center gap-2 mb-2">
            <Key className="w-4 h-4 text-blue-600" />
            <h4 className="font-medium text-blue-900">Google Gemini AI</h4>
            <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded">
              Free!
            </span>
          </div>
          <p className="text-sm text-blue-700 mb-3">
            Enable AI-powered content generation for your website
          </p>
          <div className="relative">
            <Input
              type={showKeys['gemini'] ? 'text' : 'password'}
              value={apiKeys.gemini || ''}
              onChange={(e) => handleKeyChange('gemini', e.target.value)}
              placeholder="Enter your Gemini API key"
              className="pr-10"
            />
            <button
              type="button"
              onClick={() => toggleShowKey('gemini')}
              className="absolute right-2 top-2 p-1 text-gray-400 hover:text-gray-600"
            >
              {showKeys['gemini'] ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
          <a
            href="https://ai.google.dev/gemini-api/docs/api-key"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-blue-600 hover:underline mt-2 inline-block"
          >
            Get your free Gemini API key →
          </a>
        </div>

        {/* OpenAI API */}
        <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <Key className="w-4 h-4 text-gray-600" />
            <h4 className="font-medium text-gray-900">OpenAI</h4>
            <span className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs font-medium rounded">
              Paid
            </span>
          </div>
          <p className="text-sm text-gray-600 mb-3">
            Alternative AI provider for content generation
          </p>
          <div className="relative">
            <Input
              type={showKeys['openai'] ? 'text' : 'password'}
              value={apiKeys.openai || ''}
              onChange={(e) => handleKeyChange('openai', e.target.value)}
              placeholder="Enter your OpenAI API key"
              className="pr-10"
            />
            <button
              type="button"
              onClick={() => toggleShowKey('openai')}
              className="absolute right-2 top-2 p-1 text-gray-400 hover:text-gray-600"
            >
              {showKeys['openai'] ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
          <a
            href="https://platform.openai.com/api-keys"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-600 hover:underline mt-2 inline-block"
          >
            Get OpenAI API key →
          </a>
        </div>

        {/* Netlify */}
        <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
          <div className="flex items-center gap-2 mb-2">
            <Key className="w-4 h-4 text-orange-600" />
            <h4 className="font-medium text-orange-900">Netlify</h4>
          </div>
          <p className="text-sm text-orange-700 mb-3">
            Deploy your website directly to Netlify
          </p>
          <div className="relative">
            <Input
              type={showKeys['netlify'] ? 'text' : 'password'}
              value={apiKeys.netlify || ''}
              onChange={(e) => handleKeyChange('netlify', e.target.value)}
              placeholder="Enter your Netlify API token"
              className="pr-10"
            />
            <button
              type="button"
              onClick={() => toggleShowKey('netlify')}
              className="absolute right-2 top-2 p-1 text-gray-400 hover:text-gray-600"
            >
              {showKeys['netlify'] ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
          <a
            href="https://app.netlify.com/user/applications/personal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-orange-600 hover:underline mt-2 inline-block"
          >
            Get Netlify API token →
          </a>
        </div>

        {/* Unsplash */}
        <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <Key className="w-4 h-4 text-gray-600" />
            <h4 className="font-medium text-gray-900">Unsplash</h4>
            <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded">
              Free!
            </span>
          </div>
          <p className="text-sm text-gray-600 mb-3">
            Access high-quality stock images for your website
          </p>
          <div className="relative">
            <Input
              type={showKeys['unsplash'] ? 'text' : 'password'}
              value={apiKeys.unsplash || ''}
              onChange={(e) => handleKeyChange('unsplash', e.target.value)}
              placeholder="Enter your Unsplash Access Key"
              className="pr-10"
            />
            <button
              type="button"
              onClick={() => toggleShowKey('unsplash')}
              className="absolute right-2 top-2 p-1 text-gray-400 hover:text-gray-600"
            >
              {showKeys['unsplash'] ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
          <a
            href="https://unsplash.com/oauth/applications"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-600 hover:underline mt-2 inline-block"
          >
            Get Unsplash Access Key →
          </a>
        </div>

        <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
          <h4 className="font-medium text-yellow-900 mb-2 flex items-center gap-2">
            <span>🔒</span> Privacy & Security
          </h4>
          <ul className="text-xs text-yellow-800 space-y-1">
            <li>• API keys are stored only in your browser session storage</li>
            <li>• Keys are never sent to our servers</li>
            <li>• Keys expire after 1 hour of inactivity</li>
            <li>• All API calls are made directly from your browser</li>
          </ul>
        </div>
      </div>
    </CollapsibleSection>
  );
}
