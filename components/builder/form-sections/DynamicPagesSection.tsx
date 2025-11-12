'use client';

import { useBuilderStore } from '@/lib/stores/builder-store';
import CollapsibleSection from '@/components/ui/CollapsibleSection';
import Textarea from '@/components/ui/Textarea';
import { Info } from 'lucide-react';

export default function DynamicPagesSection() {
  const { formData, updateField } = useBuilderStore();

  return (
    <CollapsibleSection
      title="Dynamic Pages"
      description="Generate separate pages for each location and service"
      badge="Optional"
      defaultOpen={false}
    >
      <div className="space-y-4">
        <div className="p-3 bg-blue-50 rounded-lg border border-blue-200 flex gap-2">
          <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-blue-800">
            <p className="font-medium mb-1">How Dynamic Pages Work</p>
            <p>Each location and service creates a separate page with tailored content and styling. These pages are automatically added to your website navigation.</p>
          </div>
        </div>

        <Textarea
          label="Additional Locations"
          value={formData.additionalLocations || ''}
          onChange={(e) => updateField('additionalLocations', e.target.value)}
          placeholder="Downtown, Westside, East Bay"
          helperText="Comma-separated. Each location gets its own page."
          rows={2}
        />

        <Textarea
          label="Additional Services"
          value={formData.additionalServices || ''}
          onChange={(e) => updateField('additionalServices', e.target.value)}
          placeholder="Emergency Services, Maintenance Plans, Installation"
          helperText="Comma-separated. Each service gets its own page with specific content."
          rows={2}
        />
      </div>
    </CollapsibleSection>
  );
}
