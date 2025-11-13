/**
 * AI Niche Finder Page
 * Main workspace with 2-column layout: form on left, analysis on right
 */

'use client';

import { NicheFinderForm } from '@/components/niche-finder/NicheFinderForm';
import { NicheAnalysisPanel } from '@/components/niche-finder/NicheAnalysisPanel';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NicheFinderPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
                <span className="text-sm font-medium">Back to Home</span>
              </Link>
              <div className="h-6 w-px bg-gray-300" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">AI Niche Finder</h1>
                <p className="text-xs text-gray-600">Discover profitable web app ideas instantly</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[calc(100vh-180px)]">
          {/* Left Panel - Form */}
          <div className="h-full overflow-hidden">
            <NicheFinderForm />
          </div>

          {/* Right Panel - Analysis */}
          <div className="h-full overflow-hidden">
            <NicheAnalysisPanel />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-8">
        <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-xs text-gray-600 text-center">
            AI Niche Finder - Powered by Google Gemini AI
          </p>
        </div>
      </footer>
    </div>
  );
}
