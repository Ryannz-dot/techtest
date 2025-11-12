import { Template } from '../types/builder';

export const templates: Template[] = [
  // Home Services
  {
    id: 'template-001',
    name: 'Modern Plumber',
    category: 'Home Services',
    thumbnail: '/template-thumbnails/modern-plumber.png',
    colors: {
      primary: '#2563EB',
      secondary: '#1E40AF',
      accent: '#F59E0B',
    },
    fonts: {
      heading: 'Inter',
      body: 'Inter',
    },
    layout: 'single-page',
    sections: ['hero', 'services', 'about', 'testimonials', 'contact', 'footer'],
  },
  {
    id: 'template-002',
    name: 'Professional HVAC',
    category: 'Home Services',
    thumbnail: '/template-thumbnails/hvac.png',
    colors: {
      primary: '#DC2626',
      secondary: '#991B1B',
      accent: '#3B82F6',
    },
    fonts: {
      heading: 'Poppins',
      body: 'Inter',
    },
    layout: 'single-page',
    sections: ['hero', 'services', 'about', 'features', 'testimonials', 'contact', 'footer'],
  },
  {
    id: 'template-003',
    name: 'Electrical Expert',
    category: 'Home Services',
    thumbnail: '/template-thumbnails/electrical.png',
    colors: {
      primary: '#F59E0B',
      secondary: '#D97706',
      accent: '#111827',
    },
    fonts: {
      heading: 'Poppins',
      body: 'Inter',
    },
    layout: 'single-page',
    sections: ['hero', 'services', 'about', 'testimonials', 'faq', 'contact', 'footer'],
  },

  // Remodeling & Construction
  {
    id: 'template-004',
    name: 'Construction Pro',
    category: 'Remodeling & Construction',
    thumbnail: '/template-thumbnails/construction.png',
    colors: {
      primary: '#059669',
      secondary: '#047857',
      accent: '#F97316',
    },
    fonts: {
      heading: 'Poppins',
      body: 'Inter',
    },
    layout: 'multi-page',
    sections: ['hero', 'services', 'portfolio', 'about', 'testimonials', 'contact', 'footer'],
  },
  {
    id: 'template-005',
    name: 'Kitchen Remodel',
    category: 'Remodeling & Construction',
    thumbnail: '/template-thumbnails/kitchen.png',
    colors: {
      primary: '#7C3AED',
      secondary: '#6D28D9',
      accent: '#EC4899',
    },
    fonts: {
      heading: 'Playfair Display',
      body: 'Inter',
    },
    layout: 'multi-page',
    sections: ['hero', 'services', 'gallery', 'about', 'testimonials', 'contact', 'footer'],
  },
  {
    id: 'template-006',
    name: 'Roofing Specialist',
    category: 'Remodeling & Construction',
    thumbnail: '/template-thumbnails/roofing.png',
    colors: {
      primary: '#0F172A',
      secondary: '#1E293B',
      accent: '#EF4444',
    },
    fonts: {
      heading: 'Poppins',
      body: 'Inter',
    },
    layout: 'single-page',
    sections: ['hero', 'services', 'about', 'features', 'testimonials', 'contact', 'footer'],
  },

  // Professional Services
  {
    id: 'template-007',
    name: 'Legal Professional',
    category: 'Professional Services',
    thumbnail: '/template-thumbnails/legal.png',
    colors: {
      primary: '#1E3A8A',
      secondary: '#1E40AF',
      accent: '#D97706',
    },
    fonts: {
      heading: 'Merriweather',
      body: 'Inter',
    },
    layout: 'multi-page',
    sections: ['hero', 'services', 'about', 'team', 'testimonials', 'contact', 'footer'],
  },
  {
    id: 'template-008',
    name: 'Consulting Agency',
    category: 'Professional Services',
    thumbnail: '/template-thumbnails/consulting.png',
    colors: {
      primary: '#06B6D4',
      secondary: '#0891B2',
      accent: '#F59E0B',
    },
    fonts: {
      heading: 'Poppins',
      body: 'Inter',
    },
    layout: 'multi-page',
    sections: ['hero', 'services', 'about', 'case-studies', 'testimonials', 'blog', 'contact', 'footer'],
  },
  {
    id: 'template-009',
    name: 'Accounting Firm',
    category: 'Professional Services',
    thumbnail: '/template-thumbnails/accounting.png',
    colors: {
      primary: '#064E3B',
      secondary: '#065F46',
      accent: '#10B981',
    },
    fonts: {
      heading: 'Poppins',
      body: 'Inter',
    },
    layout: 'multi-page',
    sections: ['hero', 'services', 'about', 'team', 'testimonials', 'contact', 'footer'],
  },

  // Health & Wellness
  {
    id: 'template-010',
    name: 'Wellness Center',
    category: 'Health & Wellness',
    thumbnail: '/template-thumbnails/wellness.png',
    colors: {
      primary: '#10B981',
      secondary: '#059669',
      accent: '#8B5CF6',
    },
    fonts: {
      heading: 'Playfair Display',
      body: 'Inter',
    },
    layout: 'multi-page',
    sections: ['hero', 'services', 'about', 'team', 'testimonials', 'blog', 'contact', 'footer'],
  },
  {
    id: 'template-011',
    name: 'Dental Practice',
    category: 'Health & Wellness',
    thumbnail: '/template-thumbnails/dental.png',
    colors: {
      primary: '#0EA5E9',
      secondary: '#0284C7',
      accent: '#F472B6',
    },
    fonts: {
      heading: 'Poppins',
      body: 'Inter',
    },
    layout: 'multi-page',
    sections: ['hero', 'services', 'about', 'team', 'testimonials', 'contact', 'footer'],
  },

  // Automotive
  {
    id: 'template-012',
    name: 'Auto Repair Shop',
    category: 'Automotive',
    thumbnail: '/template-thumbnails/auto-repair.png',
    colors: {
      primary: '#DC2626',
      secondary: '#B91C1C',
      accent: '#FBBF24',
    },
    fonts: {
      heading: 'Poppins',
      body: 'Inter',
    },
    layout: 'single-page',
    sections: ['hero', 'services', 'about', 'features', 'testimonials', 'contact', 'footer'],
  },
  {
    id: 'template-013',
    name: 'Car Detailing',
    category: 'Automotive',
    thumbnail: '/template-thumbnails/detailing.png',
    colors: {
      primary: '#1F2937',
      secondary: '#111827',
      accent: '#3B82F6',
    },
    fonts: {
      heading: 'Poppins',
      body: 'Inter',
    },
    layout: 'single-page',
    sections: ['hero', 'services', 'gallery', 'about', 'pricing', 'testimonials', 'contact', 'footer'],
  },

  // Food & Beverage
  {
    id: 'template-014',
    name: 'Restaurant',
    category: 'Food & Beverage',
    thumbnail: '/template-thumbnails/restaurant.png',
    colors: {
      primary: '#7C2D12',
      secondary: '#991B1B',
      accent: '#F59E0B',
    },
    fonts: {
      heading: 'Playfair Display',
      body: 'Inter',
    },
    layout: 'multi-page',
    sections: ['hero', 'menu', 'about', 'gallery', 'testimonials', 'contact', 'footer'],
  },
  {
    id: 'template-015',
    name: 'Coffee Shop',
    category: 'Food & Beverage',
    thumbnail: '/template-thumbnails/coffee.png',
    colors: {
      primary: '#92400E',
      secondary: '#78350F',
      accent: '#FBBF24',
    },
    fonts: {
      heading: 'Poppins',
      body: 'Inter',
    },
    layout: 'single-page',
    sections: ['hero', 'menu', 'about', 'gallery', 'contact', 'footer'],
  },

  // Retail & E-commerce
  {
    id: 'template-016',
    name: 'Boutique Store',
    category: 'Retail & E-commerce',
    thumbnail: '/template-thumbnails/boutique.png',
    colors: {
      primary: '#EC4899',
      secondary: '#DB2777',
      accent: '#8B5CF6',
    },
    fonts: {
      heading: 'Playfair Display',
      body: 'Inter',
    },
    layout: 'multi-page',
    sections: ['hero', 'products', 'about', 'gallery', 'testimonials', 'contact', 'footer'],
  },

  // Technology
  {
    id: 'template-017',
    name: 'Tech Startup',
    category: 'Technology',
    thumbnail: '/template-thumbnails/tech.png',
    colors: {
      primary: '#6366F1',
      secondary: '#4F46E5',
      accent: '#10B981',
    },
    fonts: {
      heading: 'Poppins',
      body: 'Inter',
    },
    layout: 'multi-page',
    sections: ['hero', 'features', 'about', 'pricing', 'testimonials', 'blog', 'contact', 'footer'],
  },

  // Cleaning Services
  {
    id: 'template-018',
    name: 'Cleaning Service',
    category: 'Cleaning Services',
    thumbnail: '/template-thumbnails/cleaning.png',
    colors: {
      primary: '#06B6D4',
      secondary: '#0891B2',
      accent: '#F59E0B',
    },
    fonts: {
      heading: 'Poppins',
      body: 'Inter',
    },
    layout: 'single-page',
    sections: ['hero', 'services', 'about', 'features', 'pricing', 'testimonials', 'contact', 'footer'],
  },

  // Landscaping
  {
    id: 'template-019',
    name: 'Landscaping Pro',
    category: 'Landscaping',
    thumbnail: '/template-thumbnails/landscaping.png',
    colors: {
      primary: '#15803D',
      secondary: '#166534',
      accent: '#F97316',
    },
    fonts: {
      heading: 'Poppins',
      body: 'Inter',
    },
    layout: 'multi-page',
    sections: ['hero', 'services', 'gallery', 'about', 'testimonials', 'contact', 'footer'],
  },

  // Real Estate
  {
    id: 'template-020',
    name: 'Real Estate Agent',
    category: 'Real Estate',
    thumbnail: '/template-thumbnails/realestate.png',
    colors: {
      primary: '#1E3A8A',
      secondary: '#1E40AF',
      accent: '#F59E0B',
    },
    fonts: {
      heading: 'Poppins',
      body: 'Inter',
    },
    layout: 'multi-page',
    sections: ['hero', 'listings', 'about', 'services', 'testimonials', 'blog', 'contact', 'footer'],
  },

  // Beauty & Personal Care
  {
    id: 'template-021',
    name: 'Beauty Salon',
    category: 'Beauty & Personal Care',
    thumbnail: '/template-thumbnails/beauty.png',
    colors: {
      primary: '#EC4899',
      secondary: '#DB2777',
      accent: '#A855F7',
    },
    fonts: {
      heading: 'Playfair Display',
      body: 'Inter',
    },
    layout: 'multi-page',
    sections: ['hero', 'services', 'gallery', 'about', 'team', 'testimonials', 'contact', 'footer'],
  },

  // Fitness & Sports
  {
    id: 'template-022',
    name: 'Fitness Center',
    category: 'Fitness & Sports',
    thumbnail: '/template-thumbnails/fitness.png',
    colors: {
      primary: '#DC2626',
      secondary: '#B91C1C',
      accent: '#1F2937',
    },
    fonts: {
      heading: 'Poppins',
      body: 'Inter',
    },
    layout: 'multi-page',
    sections: ['hero', 'services', 'classes', 'about', 'trainers', 'pricing', 'testimonials', 'contact', 'footer'],
  },

  // Pet Services
  {
    id: 'template-023',
    name: 'Pet Grooming',
    category: 'Pet Services',
    thumbnail: '/template-thumbnails/pet.png',
    colors: {
      primary: '#8B5CF6',
      secondary: '#7C3AED',
      accent: '#F59E0B',
    },
    fonts: {
      heading: 'Poppins',
      body: 'Inter',
    },
    layout: 'single-page',
    sections: ['hero', 'services', 'about', 'gallery', 'pricing', 'testimonials', 'contact', 'footer'],
  },
];

// Function to get recommended templates based on business category
export function getRecommendedTemplates(category: string): Template[] {
  const categoryMatches = templates.filter(t => t.category === category);
  if (categoryMatches.length > 0) {
    return categoryMatches;
  }
  // Return first 3 as default if no category match
  return templates.slice(0, 3);
}

// Function to get template by ID
export function getTemplateById(id: string): Template | undefined {
  return templates.find(t => t.id === id);
}
