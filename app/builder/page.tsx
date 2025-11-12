'use client';

import { useEffect } from 'react';
import { useBuilderStore } from '@/lib/stores/builder-store';
import BuilderForm from '@/components/builder/BuilderForm';
import PreviewPanel from '@/components/builder/PreviewPanel';
import ProgressBar from '@/components/builder/ProgressBar';
import ControlButtons from '@/components/builder/ControlButtons';

export default function BuilderPage() {
  const { loadDraft, calculateProgress } = useBuilderStore();

  useEffect(() => {
    // Load draft on mount
    loadDraft();
    calculateProgress();
  }, [loadDraft, calculateProgress]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-[1920px] mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Local Web Creator</h1>
              <p className="text-sm text-gray-600 mt-1">
                Create your professional website in minutes
              </p>
            </div>
            <ProgressBar />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-8">
        <div className="max-w-[1920px] mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2">Create Your Professional Website</h2>
          <p className="text-blue-100 text-lg">
            Fill out our smart form below and watch your beautiful, SEO-optimized website come to life in real-time
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-6 p-0 lg:p-6">
          {/* Form Panel - Left Side */}
          <div className="lg:col-span-5 bg-white lg:rounded-lg lg:shadow-lg overflow-hidden">
            <div className="p-6">
              <BuilderForm />
            </div>
          </div>

          {/* Preview Panel - Right Side */}
          <div className="lg:col-span-7 bg-white lg:rounded-lg lg:shadow-lg overflow-hidden sticky top-[100px] h-[calc(100vh-120px)]">
            <div className="flex flex-col h-full">
              <ControlButtons />
              <div className="flex-1 overflow-hidden">
                <PreviewPanel />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
