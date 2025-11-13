/**
 * Zustand Store for AI Niche Finder
 * Manages form state, analysis results, and API keys
 */

import { create } from 'zustand';
import type {
  NicheFinderState,
  NicheFinderFormData,
  NicheAnalysis,
} from '@/lib/types/niche-finder';

const STORAGE_KEYS = {
  API_KEY: 'niche-finder-api-key',
  FORM_DATA: 'niche-finder-form-data',
  HISTORY: 'niche-finder-history',
} as const;

// Helper function to safely access localStorage
const getFromStorage = <T,>(key: string, defaultValue: T): T => {
  if (typeof window === 'undefined') return defaultValue;
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch {
    return defaultValue;
  }
};

const saveToStorage = (key: string, value: unknown): void => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Failed to save to localStorage:`, error);
  }
};

const getApiKeyFromSession = (): string => {
  if (typeof window === 'undefined') return '';
  try {
    return sessionStorage.getItem(STORAGE_KEYS.API_KEY) || '';
  } catch {
    return '';
  }
};

const saveApiKeyToSession = (key: string): void => {
  if (typeof window === 'undefined') return;
  try {
    if (key) {
      sessionStorage.setItem(STORAGE_KEYS.API_KEY, key);
    } else {
      sessionStorage.removeItem(STORAGE_KEYS.API_KEY);
    }
  } catch (error) {
    console.error('Failed to save API key to sessionStorage:', error);
  }
};

const initialFormData: NicheFinderFormData = {
  topic: '',
  industry: '',
  targetMarket: '',
  preferences: '',
};

export const useNicheFinderStore = create<NicheFinderState>((set, get) => ({
  // Initial state
  formData: getFromStorage(STORAGE_KEYS.FORM_DATA, initialFormData),
  currentAnalysis: null,
  analysisHistory: getFromStorage<NicheAnalysis[]>(STORAGE_KEYS.HISTORY, []),
  isAnalyzing: false,
  error: null,
  apiKey: getApiKeyFromSession(),

  // Actions
  updateFormData: (field, value) => {
    set((state) => {
      const newFormData = { ...state.formData, [field]: value };
      saveToStorage(STORAGE_KEYS.FORM_DATA, newFormData);
      return { formData: newFormData };
    });
  },

  setApiKey: (key) => {
    saveApiKeyToSession(key);
    set({ apiKey: key });
  },

  setAnalysis: (analysis) => {
    set({ currentAnalysis: analysis, error: null });
  },

  setAnalyzing: (isAnalyzing) => {
    set({ isAnalyzing });
  },

  setError: (error) => {
    set({ error, isAnalyzing: false });
  },

  addToHistory: (analysis) => {
    set((state) => {
      const newHistory = [analysis, ...state.analysisHistory].slice(0, 10); // Keep last 10
      saveToStorage(STORAGE_KEYS.HISTORY, newHistory);
      return { analysisHistory: newHistory };
    });
  },

  clearHistory: () => {
    saveToStorage(STORAGE_KEYS.HISTORY, []);
    set({ analysisHistory: [] });
  },

  reset: () => {
    saveToStorage(STORAGE_KEYS.FORM_DATA, initialFormData);
    set({
      formData: initialFormData,
      currentAnalysis: null,
      error: null,
    });
  },
}));
