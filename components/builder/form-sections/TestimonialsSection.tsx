'use client';

import { useBuilderStore } from '@/lib/stores/builder-store';
import CollapsibleSection from '@/components/ui/CollapsibleSection';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Select from '@/components/ui/Select';

export default function TestimonialsSection() {
  const { formData, updateField } = useBuilderStore();

  const updateTestimonial = (index: number, field: 'name' | 'rating' | 'text', value: any) => {
    const testimonials = [...(formData.testimonials || [])];
    if (!testimonials[index]) {
      testimonials[index] = { name: '', rating: 5, text: '' };
    }
    testimonials[index] = { ...testimonials[index], [field]: value };
    updateField('testimonials', testimonials);
  };

  const ratingOptions = [
    { value: '5', label: '5 Stars' },
    { value: '4', label: '4 Stars' },
    { value: '3', label: '3 Stars' },
    { value: '2', label: '2 Stars' },
    { value: '1', label: '1 Star' },
  ];

  return (
    <CollapsibleSection
      title="Testimonials"
      description="Customer reviews build trust and credibility"
      badge="Optional"
      defaultOpen={false}
    >
      <div className="space-y-6">
        {[0, 1, 2].map((index) => (
          <div key={index} className="p-4 bg-yellow-50 rounded-lg border border-yellow-200 space-y-3">
            <h4 className="font-medium text-gray-900">Testimonial {index + 1}</h4>
            <Input
              label="Customer Name"
              value={formData.testimonials?.[index]?.name || ''}
              onChange={(e) => updateTestimonial(index, 'name', e.target.value)}
              placeholder="John Smith"
            />
            <Select
              label="Rating"
              value={String(formData.testimonials?.[index]?.rating || 5)}
              onChange={(e) => updateTestimonial(index, 'rating', parseInt(e.target.value))}
              options={ratingOptions}
            />
            <Textarea
              label="Review Text"
              value={formData.testimonials?.[index]?.text || ''}
              onChange={(e) => updateTestimonial(index, 'text', e.target.value)}
              placeholder="Great service! Highly recommended..."
              rows={3}
            />
          </div>
        ))}
      </div>
    </CollapsibleSection>
  );
}
