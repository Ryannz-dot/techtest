'use client';

import { useBuilderStore } from '@/lib/stores/builder-store';
import CollapsibleSection from '@/components/ui/CollapsibleSection';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';

export default function FAQSection() {
  const { formData, updateField } = useBuilderStore();

  const updateFAQ = (index: number, field: 'question' | 'answer', value: string) => {
    const faqs = [...(formData.faqs || [])];
    if (!faqs[index]) {
      faqs[index] = { question: '', answer: '' };
    }
    faqs[index] = { ...faqs[index], [field]: value };
    updateField('faqs', faqs);
  };

  return (
    <CollapsibleSection
      title="FAQ Section"
      description="Frequently Asked Questions help customers and improve SEO"
      badge="Optional"
      defaultOpen={false}
    >
      <div className="space-y-6">
        <p className="text-sm text-gray-600">
          Add up to 10 frequently asked questions. Leave blank to auto-generate with AI.
        </p>

        {[0, 1, 2, 3, 4].map((index) => (
          <div key={index} className="p-4 bg-gray-50 rounded-lg space-y-3">
            <h4 className="font-medium text-gray-900">FAQ {index + 1}</h4>
            <Input
              label="Question"
              value={formData.faqs?.[index]?.question || ''}
              onChange={(e) => updateFAQ(index, 'question', e.target.value)}
              placeholder="e.g., Do you offer 24/7 emergency service?"
            />
            <Textarea
              label="Answer"
              value={formData.faqs?.[index]?.answer || ''}
              onChange={(e) => updateFAQ(index, 'answer', e.target.value)}
              placeholder="Answer to the question..."
              rows={2}
            />
          </div>
        ))}

        <details>
          <summary className="cursor-pointer text-sm font-medium text-blue-600 hover:text-blue-700">
            Show more FAQs (6-10)
          </summary>
          <div className="space-y-6 mt-4">
            {[5, 6, 7, 8, 9].map((index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg space-y-3">
                <h4 className="font-medium text-gray-900">FAQ {index + 1}</h4>
                <Input
                  label="Question"
                  value={formData.faqs?.[index]?.question || ''}
                  onChange={(e) => updateFAQ(index, 'question', e.target.value)}
                  placeholder="e.g., What payment methods do you accept?"
                />
                <Textarea
                  label="Answer"
                  value={formData.faqs?.[index]?.answer || ''}
                  onChange={(e) => updateFAQ(index, 'answer', e.target.value)}
                  placeholder="Answer to the question..."
                  rows={2}
                />
              </div>
            ))}
          </div>
        </details>
      </div>
    </CollapsibleSection>
  );
}
