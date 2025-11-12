'use client';

import { useBuilderStore } from '@/lib/stores/builder-store';
import { templates, getRecommendedTemplates } from '@/lib/data/templates';
import CollapsibleSection from '@/components/ui/CollapsibleSection';
import { Check } from 'lucide-react';

export default function TemplateSection() {
  const { formData, selectedTemplate, setSelectedTemplate } = useBuilderStore();

  const recommendedTemplates = formData.businessCategory
    ? getRecommendedTemplates(formData.businessCategory)
    : templates.slice(0, 3);

  return (
    <CollapsibleSection
      title="Template Selection"
      description="Choose a template that best fits your business. Templates are optimized by industry."
      defaultOpen={true}
    >
      <div className="space-y-6">
        {/* Recommended Templates */}
        {recommendedTemplates.length > 0 && (
          <div>
            <h4 className="font-medium text-gray-900 mb-3">
              Recommended for {formData.businessCategory || 'Your Business'}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {recommendedTemplates.slice(0, 4).map((template) => (
                <button
                  key={template.id}
                  onClick={() => setSelectedTemplate(template)}
                  className={`relative p-4 rounded-lg border-2 transition-all text-left ${
                    selectedTemplate?.id === template.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-300 bg-white'
                  }`}
                >
                  {selectedTemplate?.id === template.id && (
                    <div className="absolute top-2 right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  )}
                  <div className="h-24 bg-gradient-to-br rounded mb-2"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${template.colors.primary}, ${template.colors.secondary})`
                    }}
                  />
                  <h5 className="font-medium text-gray-900">{template.name}</h5>
                  <p className="text-xs text-gray-500 mt-1">{template.category}</p>
                  <div className="flex gap-1 mt-2">
                    {[template.colors.primary, template.colors.secondary, template.colors.accent].map((color, i) => (
                      <div
                        key={i}
                        className="w-4 h-4 rounded-full border border-gray-200"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* All Templates */}
        <details className="group">
          <summary className="cursor-pointer text-sm font-medium text-blue-600 hover:text-blue-700">
            View all {templates.length} templates
          </summary>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
            {templates.map((template) => (
              <button
                key={template.id}
                onClick={() => setSelectedTemplate(template)}
                className={`relative p-3 rounded-lg border-2 transition-all text-left ${
                  selectedTemplate?.id === template.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-blue-300 bg-white'
                }`}
              >
                {selectedTemplate?.id === template.id && (
                  <div className="absolute top-2 right-2 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                )}
                <div className="h-16 bg-gradient-to-br rounded mb-2"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${template.colors.primary}, ${template.colors.secondary})`
                  }}
                />
                <h5 className="font-medium text-sm text-gray-900">{template.name}</h5>
                <p className="text-xs text-gray-500">{template.category}</p>
              </button>
            ))}
          </div>
        </details>

        {selectedTemplate && (
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <p className="text-sm text-green-800">
              ✓ Selected: <span className="font-medium">{selectedTemplate.name}</span>
            </p>
          </div>
        )}
      </div>
    </CollapsibleSection>
  );
}
