'use client';

import { useBuilderStore } from '@/lib/stores/builder-store';
import CollapsibleSection from '@/components/ui/CollapsibleSection';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';

export default function HoursSection() {
  const { formData, updateField } = useBuilderStore();

  return (
    <CollapsibleSection
      title="Hours & Social Media"
      description="Business hours and social media links"
      badge="Optional"
      defaultOpen={false}
    >
      <div className="space-y-4">
        <Textarea
          label="Business Hours"
          value={formData.businessHours || ''}
          onChange={(e) => updateField('businessHours', e.target.value)}
          placeholder="Monday-Friday: 7am-7pm&#10;Saturday: 8am-5pm&#10;Sunday: Closed"
          helperText="Enter each day's hours on a new line"
          rows={4}
        />

        <Input
          label="Facebook URL"
          type="url"
          value={formData.facebookUrl || ''}
          onChange={(e) => updateField('facebookUrl', e.target.value)}
          placeholder="https://facebook.com/yourbusiness"
        />

        <Input
          label="Twitter URL"
          type="url"
          value={formData.twitterUrl || ''}
          onChange={(e) => updateField('twitterUrl', e.target.value)}
          placeholder="https://twitter.com/yourbusiness"
        />

        <Input
          label="LinkedIn URL"
          type="url"
          value={formData.linkedinUrl || ''}
          onChange={(e) => updateField('linkedinUrl', e.target.value)}
          placeholder="https://linkedin.com/company/yourbusiness"
        />

        <Input
          label="Pinterest URL"
          type="url"
          value={formData.pinterestUrl || ''}
          onChange={(e) => updateField('pinterestUrl', e.target.value)}
          placeholder="https://pinterest.com/yourbusiness"
        />
      </div>
    </CollapsibleSection>
  );
}
