'use client';

import { useBuilderStore } from '@/lib/stores/builder-store';
import CollapsibleSection from '@/components/ui/CollapsibleSection';
import Textarea from '@/components/ui/Textarea';

export default function DisclaimerSection() {
  const { formData, updateField } = useBuilderStore();

  return (
    <CollapsibleSection
      title="Lead Generation Disclaimer"
      description="Optional legal disclosure for lead generation websites"
      badge="Optional"
      defaultOpen={false}
    >
      <div className="space-y-4">
        <Textarea
          label="Disclaimer Text"
          value={formData.disclaimer || ''}
          onChange={(e) => updateField('disclaimer', e.target.value)}
          placeholder="This is a lead generation website. We may receive compensation from service providers..."
          helperText="Displays at the bottom of your website. Use if required for legal compliance."
          rows={3}
        />

        <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
          <p className="text-xs text-yellow-800">
            <strong>Note:</strong> Consult with a legal professional to ensure your website complies with all applicable laws and regulations.
          </p>
        </div>
      </div>
    </CollapsibleSection>
  );
}
