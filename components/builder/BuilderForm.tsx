'use client';

import { useBuilderStore } from '@/lib/stores/builder-store';
import APIKeysSection from './form-sections/APIKeysSection';
import TemplateSection from './form-sections/TemplateSection';
import SEOSettingsSection from './form-sections/SEOSettingsSection';
import HeroSection from './form-sections/HeroSection';
import BusinessInfoSection from './form-sections/BusinessInfoSection';
import ServicesSection from './form-sections/ServicesSection';
import DynamicPagesSection from './form-sections/DynamicPagesSection';
import FeaturesSection from './form-sections/FeaturesSection';
import HoursSection from './form-sections/HoursSection';
import FooterSection from './form-sections/FooterSection';
import SEOContentSection from './form-sections/SEOContentSection';
import FAQSection from './form-sections/FAQSection';
import CTAsSection from './form-sections/CTAsSection';
import TestimonialsSection from './form-sections/TestimonialsSection';
import BlogSection from './form-sections/BlogSection';
import DisclaimerSection from './form-sections/DisclaimerSection';

export default function BuilderForm() {
  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold text-gray-900">Website Builder Form</h2>
        <p className="text-sm text-gray-600">
          Fill out the form below to create your professional website. Required fields are marked with *
        </p>
      </div>

      <APIKeysSection />
      <TemplateSection />
      <SEOSettingsSection />
      <HeroSection />
      <BusinessInfoSection />
      <ServicesSection />
      <DynamicPagesSection />
      <FeaturesSection />
      <HoursSection />
      <FooterSection />
      <SEOContentSection />
      <FAQSection />
      <CTAsSection />
      <TestimonialsSection />
      <BlogSection />
      <DisclaimerSection />

      <div className="text-sm text-gray-500 pb-8">
        <p>Your data is automatically saved in your browser. No account required!</p>
      </div>
    </div>
  );
}
