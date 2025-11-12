import { create } from 'zustand';
import { BuilderState, FormData, Template, APIKeys } from '../types/builder';

const STORAGE_KEY = 'local_web_creator_draft';
const API_KEYS_STORAGE = 'local_web_creator_api_keys';

// Initialize default form data
const defaultFormData: Partial<FormData> = {
  serviceType: '',
  location: '',
  heroDescription: '',
  businessName: '',
  businessCategory: 'Home Services',
  phoneNumber: '',
  servicesOffered: '',
  targetedKeywords: '',
  aboutDescription: '',
  featureHeadlines: '',
  featureDescriptions: '',
  seoSections: Array(6).fill(null).map(() => ({ heading: '', content: '' })),
  faqs: Array(10).fill(null).map(() => ({ question: '', answer: '' })),
  testimonials: Array(3).fill(null).map(() => ({ name: '', rating: 5, text: '' })),
  ctas: {
    call: { enabled: false },
    whatsapp: { enabled: false, number: '' },
    custom: { enabled: false, text: '', url: '' },
  },
  includeBlog: false,
};

export const useBuilderStore = create<BuilderState>((set, get) => ({
  // Initial state
  formData: defaultFormData,
  selectedTemplate: null,
  apiKeys: {},
  progress: 0,
  isGenerating: false,

  // Form data methods
  setFormData: (data: Partial<FormData>) => {
    set({ formData: data });
    get().saveDraft();
    get().calculateProgress();
  },

  updateField: (field: keyof FormData, value: any) => {
    set((state) => ({
      formData: {
        ...state.formData,
        [field]: value,
      },
    }));
    get().saveDraft();
    get().calculateProgress();
  },

  // Template selection
  setSelectedTemplate: (template: Template) => {
    set({ selectedTemplate: template });
    get().saveDraft();
  },

  // API keys management
  setAPIKeys: (keys: APIKeys) => {
    set({ apiKeys: keys });
    // Store API keys in sessionStorage for security
    if (typeof window !== 'undefined') {
      sessionStorage.setItem(API_KEYS_STORAGE, JSON.stringify(keys));
    }
  },

  // Draft management
  saveDraft: () => {
    if (typeof window !== 'undefined') {
      const draft = {
        version: '1.0',
        timestamp: new Date().toISOString(),
        formData: get().formData,
        selectedTemplate: get().selectedTemplate,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(draft));
    }
  },

  loadDraft: () => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(STORAGE_KEY);
      const apiKeysStored = sessionStorage.getItem(API_KEYS_STORAGE);

      if (stored) {
        try {
          const draft = JSON.parse(stored);
          set({
            formData: draft.formData || defaultFormData,
            selectedTemplate: draft.selectedTemplate,
          });
        } catch (error) {
          console.error('Failed to load draft:', error);
        }
      }

      if (apiKeysStored) {
        try {
          const keys = JSON.parse(apiKeysStored);
          set({ apiKeys: keys });
        } catch (error) {
          console.error('Failed to load API keys:', error);
        }
      }
    }
  },

  clearDraft: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(STORAGE_KEY);
    }
    set({
      formData: defaultFormData,
      selectedTemplate: null,
      progress: 0,
    });
  },

  // Progress calculation
  calculateProgress: () => {
    const { formData } = get();
    const requiredFields = [
      'businessName',
      'businessCategory',
      'phoneNumber',
      'servicesOffered',
      'targetedKeywords',
      'aboutDescription',
    ];

    const filledFields = requiredFields.filter((field) => {
      const value = formData[field as keyof FormData];
      return value && value !== '';
    }).length;

    const progress = Math.round((filledFields / requiredFields.length) * 100);
    set({ progress });
    return progress;
  },

  // AI generation state
  setIsGenerating: (value: boolean) => {
    set({ isGenerating: value });
  },
}));
