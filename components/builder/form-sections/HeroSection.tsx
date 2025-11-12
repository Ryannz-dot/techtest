'use client';

import { useBuilderStore } from '@/lib/stores/builder-store';
import CollapsibleSection from '@/components/ui/CollapsibleSection';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';

export default function HeroSection() {
  const { formData, updateField } = useBuilderStore();

  return (
    <CollapsibleSection
      title="Hero Section"
      description="The first thing visitors see on your website. Make it compelling!"
    >
      <div className="space-y-4">
        <Input
          label="Service Type"
          value={formData.serviceType || ''}
          onChange={(e) => updateField('serviceType', e.target.value)}
          placeholder="e.g., Local SEO Services, Professional Plumbing"
          helperText="What service do you provide?"
        />
        <Input
          label="Location"
          value={formData.location || ''}
          onChange={(e) => updateField('location', e.target.value)}
          placeholder="e.g., London, San Francisco Bay Area"
          helperText="Where do you operate?"
        />
        <Textarea
          label="Hero Description"
          value={formData.heroDescription || ''}
          onChange={(e) => updateField('heroDescription', e.target.value)}
          placeholder="A compelling pitch for your services..."
          helperText="Brief, engaging description of your main offering (2-3 sentences)"
          rows={3}
        />
      </div>
    </CollapsibleSection>
  );
}
