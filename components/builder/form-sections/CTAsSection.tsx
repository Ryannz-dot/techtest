'use client';

import { useBuilderStore } from '@/lib/stores/builder-store';
import CollapsibleSection from '@/components/ui/CollapsibleSection';
import Input from '@/components/ui/Input';

export default function CTAsSection() {
  const { formData, updateField } = useBuilderStore();

  const updateCTA = (type: 'call' | 'whatsapp' | 'custom', field: string, value: any) => {
    const ctas = { ...formData.ctas };
    ctas[type] = { ...ctas[type], [field]: value };
    updateField('ctas', ctas);
  };

  return (
    <CollapsibleSection
      title="Call-to-Action Buttons"
      description="Add action buttons to your website"
      badge="Optional"
      defaultOpen={false}
    >
      <div className="space-y-6">
        {/* Call Button */}
        <div className="p-4 bg-green-50 rounded-lg border border-green-200">
          <div className="flex items-center gap-2 mb-3">
            <input
              type="checkbox"
              id="call-enabled"
              checked={formData.ctas?.call?.enabled || false}
              onChange={(e) => updateCTA('call', 'enabled', e.target.checked)}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="call-enabled" className="font-medium text-gray-900 cursor-pointer">
              Enable Call Button
            </label>
          </div>
          <p className="text-sm text-gray-600">
            Uses the phone number from Business Information section
          </p>
        </div>

        {/* WhatsApp Button */}
        <div className="p-4 bg-green-50 rounded-lg border border-green-200">
          <div className="flex items-center gap-2 mb-3">
            <input
              type="checkbox"
              id="whatsapp-enabled"
              checked={formData.ctas?.whatsapp?.enabled || false}
              onChange={(e) => updateCTA('whatsapp', 'enabled', e.target.checked)}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="whatsapp-enabled" className="font-medium text-gray-900 cursor-pointer">
              Enable WhatsApp Button
            </label>
          </div>
          {formData.ctas?.whatsapp?.enabled && (
            <Input
              label="WhatsApp Number"
              type="tel"
              value={formData.ctas?.whatsapp?.number || ''}
              onChange={(e) => updateCTA('whatsapp', 'number', e.target.value)}
              placeholder="+1234567890"
              helperText="Include country code (e.g., +1 for US)"
            />
          )}
        </div>

        {/* Custom Button */}
        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
          <div className="flex items-center gap-2 mb-3">
            <input
              type="checkbox"
              id="custom-enabled"
              checked={formData.ctas?.custom?.enabled || false}
              onChange={(e) => updateCTA('custom', 'enabled', e.target.checked)}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="custom-enabled" className="font-medium text-gray-900 cursor-pointer">
              Enable Custom Button
            </label>
          </div>
          {formData.ctas?.custom?.enabled && (
            <div className="space-y-3">
              <Input
                label="Button Text"
                value={formData.ctas?.custom?.text || ''}
                onChange={(e) => updateCTA('custom', 'text', e.target.value)}
                placeholder="Get Quote"
              />
              <Input
                label="Custom URL"
                type="url"
                value={formData.ctas?.custom?.url || ''}
                onChange={(e) => updateCTA('custom', 'url', e.target.value)}
                placeholder="https://your-booking-link.com"
              />
            </div>
          )}
        </div>
      </div>
    </CollapsibleSection>
  );
}
