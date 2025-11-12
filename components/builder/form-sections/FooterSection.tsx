'use client';

import { useBuilderStore } from '@/lib/stores/builder-store';
import CollapsibleSection from '@/components/ui/CollapsibleSection';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';

export default function FooterSection() {
  const { formData, updateField } = useBuilderStore();

  return (
    <CollapsibleSection
      title="Footer Information"
      description="Content for the bottom of your website"
      badge="Optional"
      defaultOpen={false}
    >
      <div className="space-y-4">
        <Input
          label="Footer Title"
          value={formData.footerTitle || ''}
          onChange={(e) => updateField('footerTitle', e.target.value)}
          placeholder="Ready to Get Started?"
          helperText="Call-to-action headline for footer"
        />

        <Textarea
          label="Key Facts"
          value={formData.keyFacts || ''}
          onChange={(e) => updateField('keyFacts', e.target.value)}
          placeholder="15+ Years Experience, 1000+ Happy Customers, Licensed & Insured"
          helperText="Comma-separated list of key achievements or facts"
          rows={2}
        />

        <Textarea
          label="Footer Description"
          value={formData.footerDescription || ''}
          onChange={(e) => updateField('footerDescription', e.target.value)}
          placeholder="Contact us today for a free estimate..."
          helperText="Additional footer message"
          rows={2}
        />
      </div>
    </CollapsibleSection>
  );
}
