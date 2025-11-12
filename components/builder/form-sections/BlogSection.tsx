'use client';

import { useBuilderStore } from '@/lib/stores/builder-store';
import CollapsibleSection from '@/components/ui/CollapsibleSection';

export default function BlogSection() {
  const { formData, updateField } = useBuilderStore();

  return (
    <CollapsibleSection
      title="Blog Configuration"
      description="Add AI-generated blog posts to improve SEO and content marketing"
      badge="Optional"
      defaultOpen={false}
    >
      <div className="space-y-4">
        <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
          <div className="flex items-center gap-2 mb-3">
            <input
              type="checkbox"
              id="blog-enabled"
              checked={formData.includeBlog || false}
              onChange={(e) => updateField('includeBlog', e.target.checked)}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="blog-enabled" className="font-medium text-gray-900 cursor-pointer">
              Include Blog Section
            </label>
          </div>
          <p className="text-sm text-purple-800">
            When enabled, AI will generate 3-5 SEO-optimized blog posts based on your business information, services, and keywords.
          </p>
        </div>

        {formData.includeBlog && (
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-800">
              <strong>Note:</strong> Blog posts will be automatically generated when you click "AI Generate" button. Make sure you have a Gemini or OpenAI API key configured.
            </p>
          </div>
        )}
      </div>
    </CollapsibleSection>
  );
}
