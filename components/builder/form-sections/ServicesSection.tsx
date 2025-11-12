'use client';

import { useBuilderStore } from '@/lib/stores/builder-store';
import CollapsibleSection from '@/components/ui/CollapsibleSection';
import Textarea from '@/components/ui/Textarea';

export default function ServicesSection() {
  const { formData, updateField } = useBuilderStore();

  return (
    <CollapsibleSection
      title="Services & Areas"
      description="What services do you offer and where?"
    >
      <div className="space-y-4">
        <Textarea
          label="Services Offered"
          value={formData.servicesOffered || ''}
          onChange={(e) => updateField('servicesOffered', e.target.value)}
          placeholder="Emergency Plumbing, Drain Cleaning, Water Heater Repair, Pipe Installation"
          helperText="Comma-separated list of your main services"
          required
          rows={3}
        />

        <Textarea
          label="Service Areas"
          value={formData.serviceAreas || ''}
          onChange={(e) => updateField('serviceAreas', e.target.value)}
          placeholder="San Francisco, Oakland, San Jose, Berkeley"
          helperText="Comma-separated list of cities or regions you serve"
          rows={2}
        />

        <Textarea
          label="Targeted Keywords"
          value={formData.targetedKeywords || ''}
          onChange={(e) => updateField('targetedKeywords', e.target.value)}
          placeholder="plumber near me, emergency plumbing, water heater repair"
          helperText="Important for SEO. Include terms your customers might search for."
          required
          rows={2}
        />
      </div>
    </CollapsibleSection>
  );
}
