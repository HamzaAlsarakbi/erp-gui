import { Theme } from '@/assets/themes/themes';
import { create } from 'zustand';

export interface AppSlice {
  app: {
    theme: Theme;
    isDevMode: boolean;
    setTheme: (theme: Theme) => void;
    setIsDevMode: (devMode: boolean) => void;
  };
}

export const useApp = create<AppSlice>((set) => ({
  app: {
    theme: 'dark',
    isDevMode: false,
    setTheme: (theme: any) =>
      set((state) => ({ app: { ...state.app, theme } })),
    setIsDevMode: (isDevMode) =>
      set((state) => ({ app: { ...state.app, isDevMode } })),
  },
}));
