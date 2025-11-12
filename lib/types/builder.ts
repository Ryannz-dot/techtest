// Core types for Local Web Creator

export interface APIKeys {
  gemini?: string;
  openai?: string;
  netlify?: string;
  unsplash?: string;
}

export interface Template {
  id: string;
  name: string;
  category: string;
  thumbnail: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  fonts: {
    heading: string;
    body: string;
  };
  layout: 'single-page' | 'multi-page';
  sections: string[];
}

export interface CallToAction {
  call: {
    enabled: boolean;
  };
  whatsapp: {
    enabled: boolean;
    number: string;
  };
  custom: {
    enabled: boolean;
    text: string;
    url: string;
  };
}

export interface Testimonial {
  name: string;
  rating: number;
  text: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface SEOSection {
  heading: string;
  content: string;
}

export interface FormData {
  // SEO Settings
  metaTitle?: string;
  metaDescription?: string;

  // Hero Section
  serviceType: string;
  location: string;
  heroDescription: string;

  // Business Information
  businessName: string;
  businessLogo?: File | string;
  businessCategory: string;
  phoneNumber: string;
  email?: string;
  yearsInBusiness?: number;
  businessAddress?: string;

  // Services & Areas
  servicesOffered: string;
  serviceAreas?: string;
  targetedKeywords: string;

  // Dynamic Pages
  additionalLocations?: string;
  additionalServices?: string;

  // Features & About
  featureHeadlines: string;
  featureDescriptions: string;
  aboutDescription: string;

  // Hours & Social Media
  businessHours?: string;
  facebookUrl?: string;
  twitterUrl?: string;
  linkedinUrl?: string;
  pinterestUrl?: string;

  // Footer Information
  footerTitle?: string;
  keyFacts?: string;
  footerDescription?: string;

  // SEO Content Sections (6 sections)
  seoSections: SEOSection[];

  // FAQ Section (10 items)
  faqs: FAQ[];

  // Call-to-Action Buttons
  ctas: CallToAction;

  // Testimonials (3 items)
  testimonials: Testimonial[];

  // Blog Configuration
  includeBlog: boolean;

  // Lead Generation Disclaimer
  disclaimer?: string;
}

export interface BuilderState {
  // Form data
  formData: Partial<FormData>;
  setFormData: (data: Partial<FormData>) => void;
  updateField: (field: keyof FormData, value: any) => void;

  // Template selection
  selectedTemplate: Template | null;
  setSelectedTemplate: (template: Template) => void;

  // API keys
  apiKeys: APIKeys;
  setAPIKeys: (keys: APIKeys) => void;

  // Draft management
  saveDraft: () => void;
  loadDraft: () => void;
  clearDraft: () => void;

  // Progress tracking
  progress: number;
  calculateProgress: () => number;

  // AI generation
  isGenerating: boolean;
  setIsGenerating: (value: boolean) => void;
}

export interface GeneratedWebsite {
  html: Map<string, string>; // filename -> content
  css: string;
  js: string;
  images: Map<string, string>; // filename -> base64 or url
}

export interface DeploymentResult {
  success: boolean;
  url?: string;
  error?: string;
}

export type BusinessCategory =
  | 'Home Services'
  | 'Remodeling & Construction'
  | 'Professional Services'
  | 'Health & Wellness'
  | 'Automotive'
  | 'Food & Beverage'
  | 'Retail & E-commerce'
  | 'Technology'
  | 'Education'
  | 'Real Estate'
  | 'Finance'
  | 'Entertainment'
  | 'Beauty & Personal Care'
  | 'Legal Services'
  | 'Marketing & Advertising'
  | 'Photography'
  | 'Fitness & Sports'
  | 'Pet Services'
  | 'Travel & Hospitality'
  | 'Cleaning Services'
  | 'Landscaping'
  | 'Other';
