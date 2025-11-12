'use client';

import { useBuilderStore } from '@/lib/stores/builder-store';
import CollapsibleSection from '@/components/ui/CollapsibleSection';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';

export default function SEOContentSection() {
  const { formData, updateField } = useBuilderStore();

  const updateSEOSection = (index: number, field: 'heading' | 'content', value: string) => {
    const sections = [...(formData.seoSections || [])];
    if (!sections[index]) {
      sections[index] = { heading: '', content: '' };
    }
    sections[index] = { ...sections[index], [field]: value };
    updateField('seoSections', sections);
  };

  return (
    <CollapsibleSection
      title="SEO Content Sections"
      description="Long-form content sections to help your website rank better in search engines"
      badge="Optional"
      defaultOpen={false}
    >
      <div className="space-y-6">
        <p className="text-sm text-gray-600">
          Add up to 6 content sections for SEO. Leave blank to auto-generate with AI.
        </p>

        {[0, 1, 2, 3, 4, 5].map((index) => (
          <div key={index} className="p-4 bg-gray-50 rounded-lg space-y-3">
            <h4 className="font-medium text-gray-900">Section {index + 1}</h4>
            <Input
              label="SEO Heading"
              value={formData.seoSections?.[index]?.heading || ''}
              onChange={(e) => updateSEOSection(index, 'heading', e.target.value)}
              placeholder={`e.g., Professional Services in ${formData.location || 'Your Area'}`}
            />
            <Textarea
              label="SEO Content"
              value={formData.seoSections?.[index]?.content || ''}
              onChange={(e) => updateSEOSection(index, 'content', e.target.value)}
              placeholder="Detailed content for this section..."
              rows={4}
            />
          </div>
        ))}
      </div>
    </CollapsibleSection>
  );
}
