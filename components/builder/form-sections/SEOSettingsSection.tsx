'use client';

import { useBuilderStore } from '@/lib/stores/builder-store';
import CollapsibleSection from '@/components/ui/CollapsibleSection';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';

export default function SEOSettingsSection() {
  const { formData, updateField } = useBuilderStore();

  return (
    <CollapsibleSection
      title="SEO Settings"
      description="Optimize your website for search engines. These fields are optional but recommended."
      badge="Optional"
      defaultOpen={false}
    >
      <div className="space-y-4">
        <Input
          label="Meta Title"
          value={formData.metaTitle || ''}
          onChange={(e) => updateField('metaTitle', e.target.value)}
          placeholder="Your Business Name | Services in Location"
          helperText="Recommended: 50-60 characters. This appears in search results."
          maxLength={60}
        />
        <div>
          <Textarea
            label="Meta Description"
            value={formData.metaDescription || ''}
            onChange={(e) => updateField('metaDescription', e.target.value)}
            placeholder="Brief description of your business and services..."
            helperText="Recommended: 150-160 characters. This appears in search results below the title."
            maxLength={160}
          />
          <div className="text-xs text-gray-500 mt-1 text-right">
            {(formData.metaDescription || '').length}/160 characters
          </div>
        </div>
      </div>
    </CollapsibleSection>
  );
}
