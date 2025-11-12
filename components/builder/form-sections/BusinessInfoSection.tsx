'use client';

import { useBuilderStore } from '@/lib/stores/builder-store';
import { BusinessCategory } from '@/lib/types/builder';
import CollapsibleSection from '@/components/ui/CollapsibleSection';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';

const BUSINESS_CATEGORIES: BusinessCategory[] = [
  'Home Services',
  'Remodeling & Construction',
  'Professional Services',
  'Health & Wellness',
  'Automotive',
  'Food & Beverage',
  'Retail & E-commerce',
  'Technology',
  'Education',
  'Real Estate',
  'Finance',
  'Entertainment',
  'Beauty & Personal Care',
  'Legal Services',
  'Marketing & Advertising',
  'Photography',
  'Fitness & Sports',
  'Pet Services',
  'Travel & Hospitality',
  'Cleaning Services',
  'Landscaping',
  'Other',
];

export default function BusinessInfoSection() {
  const { formData, updateField } = useBuilderStore();

  return (
    <CollapsibleSection
      title="Business Information"
      description="Essential information about your business"
    >
      <div className="space-y-4">
        <Input
          label="Business Name"
          value={formData.businessName || ''}
          onChange={(e) => updateField('businessName', e.target.value)}
          placeholder="e.g., Bay Area Plumbing Pros"
          required
        />

        <Select
          label="Business Category"
          value={formData.businessCategory || 'Home Services'}
          onChange={(e) => updateField('businessCategory', e.target.value)}
          options={BUSINESS_CATEGORIES.map(cat => ({ value: cat, label: cat }))}
          required
          helperText="This helps us recommend the best template for your business"
        />

        <Input
          label="Phone Number"
          type="tel"
          value={formData.phoneNumber || ''}
          onChange={(e) => updateField('phoneNumber', e.target.value)}
          placeholder="(555) 123-4567"
          required
        />

        <Input
          label="Email Address"
          type="email"
          value={formData.email || ''}
          onChange={(e) => updateField('email', e.target.value)}
          placeholder="contact@yourbusiness.com"
        />

        <Input
          label="Years in Business"
          type="number"
          min="1"
          value={formData.yearsInBusiness || ''}
          onChange={(e) => updateField('yearsInBusiness', parseInt(e.target.value))}
          placeholder="5"
          helperText="How long have you been in business?"
        />

        <Input
          label="Business Address"
          value={formData.businessAddress || ''}
          onChange={(e) => updateField('businessAddress', e.target.value)}
          placeholder="123 Main Street, City, State ZIP"
          helperText="Full address for local SEO"
        />

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Business Logo
          </label>
          <input
            type="file"
            accept="image/png,image/svg+xml,image/jpeg"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                updateField('businessLogo', file);
              }
            }}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="text-xs text-gray-500 mt-1">
            Upload your logo (PNG/SVG recommended, square aspect ratio). Used as favicon and header logo.
          </p>
        </div>
      </div>
    </CollapsibleSection>
  );
}
