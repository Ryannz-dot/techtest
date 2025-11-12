'use client';

import { useState } from 'react';
import { useBuilderStore } from '@/lib/stores/builder-store';
import { Download, Sparkles, Trash2, Eye, Upload } from 'lucide-react';

export default function ControlButtons() {
  const { formData, setFormData, clearDraft, isGenerating, setIsGenerating } = useBuilderStore();
  const [isDeploying, setIsDeploying] = useState(false);

  const loadSampleData = () => {
    setFormData({
      serviceType: 'Professional Plumbing Services',
      location: 'San Francisco Bay Area',
      heroDescription: 'Reliable, licensed plumbers available 24/7 for all your plumbing needs',
      businessName: 'Bay Area Plumbing Pros',
      businessCategory: 'Home Services',
      phoneNumber: '(415) 555-0123',
      email: 'contact@bayareaplumbing.com',
      yearsInBusiness: 15,
      businessAddress: '123 Main Street, San Francisco, CA 94102',
      servicesOffered: 'Emergency Plumbing, Drain Cleaning, Water Heater Repair, Pipe Installation, Leak Detection',
      serviceAreas: 'San Francisco, Oakland, San Jose, Palo Alto, Berkeley',
      targetedKeywords: 'plumber near me, emergency plumbing, water heater repair, drain cleaning, licensed plumber',
      featureHeadlines: '24/7 Emergency Service, Licensed & Insured, 15+ Years Experience',
      featureDescriptions: 'Available anytime day or night for your plumbing emergencies, Fully licensed, bonded and insured for your protection, Over 15 years serving the Bay Area community',
      aboutDescription: 'Bay Area Plumbing Pros has been serving the San Francisco Bay Area for over 15 years. Our team of licensed and insured plumbers is dedicated to providing fast, reliable service at competitive prices. We take pride in our work and guarantee customer satisfaction.',
      businessHours: 'Monday-Friday: 7am-7pm\nSaturday: 8am-5pm\nSunday: Emergency Service Only\n24/7 Emergency Service Available',
      footerTitle: 'Ready to Get Started?',
      keyFacts: '15+ Years Experience, 1000+ Happy Customers, Licensed & Insured, 24/7 Emergency Service',
      footerDescription: 'Contact us today for a free estimate on your plumbing project',
      includeBlog: false,
      seoSections: [
        { heading: 'Professional Plumbing Services in San Francisco', content: '' },
        { heading: 'Why Choose Bay Area Plumbing Pros', content: '' },
        { heading: 'Our Service Areas', content: '' },
        { heading: 'Emergency Plumbing Services', content: '' },
        { heading: 'Residential & Commercial Plumbing', content: '' },
        { heading: 'Customer Satisfaction Guaranteed', content: '' },
      ],
      faqs: [
        { question: 'Do you offer 24/7 emergency service?', answer: '' },
        { question: 'Are you licensed and insured?', answer: '' },
        { question: 'What areas do you serve?', answer: '' },
        { question: 'Do you offer free estimates?', answer: '' },
        { question: 'What forms of payment do you accept?', answer: '' },
        { question: '', answer: '' },
        { question: '', answer: '' },
        { question: '', answer: '' },
        { question: '', answer: '' },
        { question: '', answer: '' },
      ],
      testimonials: [
        { name: 'John Smith', rating: 5, text: 'Fast, professional service. Highly recommended!' },
        { name: 'Sarah Johnson', rating: 5, text: 'They fixed our water heater the same day. Great work!' },
        { name: 'Mike Davis', rating: 5, text: 'Honest pricing and excellent workmanship.' },
      ],
      ctas: {
        call: { enabled: true },
        whatsapp: { enabled: false, number: '' },
        custom: { enabled: false, text: '', url: '' },
      },
    });
  };

  const handleClearAll = () => {
    if (confirm('Are you sure you want to clear all data? This cannot be undone.')) {
      clearDraft();
    }
  };

  const handleAIGenerate = async () => {
    // TODO: Implement AI generation
    setIsGenerating(true);
    setTimeout(() => {
      alert('AI generation will be implemented with Gemini API');
      setIsGenerating(false);
    }, 2000);
  };

  const handleDownload = () => {
    // TODO: Implement download functionality
    alert('Download functionality will be implemented');
  };

  const handleDeploy = async () => {
    // TODO: Implement Netlify deployment
    setIsDeploying(true);
    setTimeout(() => {
      alert('Netlify deployment will be implemented');
      setIsDeploying(false);
    }, 2000);
  };

  const handlePreview = () => {
    // TODO: Open preview in new window
    alert('Preview will open in a new window');
  };

  return (
    <div className="border-b border-gray-200 p-4 bg-gray-50">
      <div className="flex flex-wrap gap-2">
        <button
          onClick={loadSampleData}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors text-sm font-medium"
        >
          Load Sample Data
        </button>

        <button
          onClick={handleClearAll}
          className="px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors text-sm font-medium flex items-center gap-2"
        >
          <Trash2 className="w-4 h-4" />
          Clear All
        </button>

        <div className="flex-1" />

        <button
          onClick={handlePreview}
          className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors text-sm font-medium flex items-center gap-2"
        >
          <Eye className="w-4 h-4" />
          Preview
        </button>

        <button
          onClick={handleAIGenerate}
          disabled={isGenerating}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium flex items-center gap-2 disabled:opacity-50"
        >
          <Sparkles className="w-4 h-4" />
          {isGenerating ? 'Generating...' : 'AI Generate'}
        </button>

        <button
          onClick={handleDownload}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium flex items-center gap-2"
        >
          <Download className="w-4 h-4" />
          Download
        </button>

        <button
          onClick={handleDeploy}
          disabled={isDeploying}
          className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-sm font-medium flex items-center gap-2 disabled:opacity-50"
        >
          <Upload className="w-4 h-4" />
          {isDeploying ? 'Deploying...' : 'Deploy to Netlify'}
        </button>
      </div>
    </div>
  );
}
