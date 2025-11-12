'use client';

import { useBuilderStore } from '@/lib/stores/builder-store';
import CollapsibleSection from '@/components/ui/CollapsibleSection';
import Textarea from '@/components/ui/Textarea';

export default function FeaturesSection() {
  const { formData, updateField } = useBuilderStore();

  return (
    <CollapsibleSection
      title="Features & About"
      description="Highlight your key features and tell your story"
    >
      <div className="space-y-4">
        <Textarea
          label="Feature Headlines"
          value={formData.featureHeadlines || ''}
          onChange={(e) => updateField('featureHeadlines', e.target.value)}
          placeholder="24/7 Emergency Service, Licensed & Insured, 15+ Years Experience"
          helperText="3 feature headlines, comma-separated"
          rows={2}
        />

        <Textarea
          label="Feature Descriptions"
          value={formData.featureDescriptions || ''}
          onChange={(e) => updateField('featureDescriptions', e.target.value)}
          placeholder="Available anytime for emergencies, Fully licensed and insured, Over 15 years of experience"
          helperText="3 descriptions matching the headlines above, comma-separated"
          rows={3}
        />

        <Textarea
          label="About Description"
          value={formData.aboutDescription || ''}
          onChange={(e) => updateField('aboutDescription', e.target.value)}
          placeholder="Tell your business story, values, and what makes you unique..."
          helperText="Your business story and value proposition (2-3 paragraphs)"
          required
          rows={5}
        />
      </div>
    </CollapsibleSection>
  );
}
