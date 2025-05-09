import type { THEME_MODE_DARK, THEME_MODE_LIGHT, THEME_MODE_SYSTEM } from '@geonative/ui/constants/theme.ts';

/**
 * Theme configuration interface defining color properties for a theme
 */
export interface ThemeConfig {
  background: string; // Background color for the theme
  foreground: string; // Foreground color for text
  primary: string; // Primary background color
  'primary-foreground': string; // Primary foreground color
  secondary?: string; // Secondary background color
  'secondary-foreground'?: string; // Secondary foreground color
  card?: string; // Card background color
  'card-foreground'?: string; // Card foreground color
  popover?: string; // Popover background color
  'popover-foreground'?: string; // Popover foreground color
  muted?: string; // Muted background color
  'muted-foreground'?: string; // Muted foreground color
  accent?: string; // Accent background color
  'accent-foreground'?: string; // Accent color foreground
  destructive?: string; // Destructive action color background
  'destructive-foreground'?: string; // Destructive action color foreground
  border?: string; // Border color
  input?: string; // Input field background color
  ring?: string; // Ring color
  radius?: string; // Border radius
  [key: string]: string | undefined; // Allow additional custom properties
}

/**
 * ThemeMode
 */
export type ThemeModeLight = typeof THEME_MODE_LIGHT;
export type ThemeModeDark = typeof THEME_MODE_DARK;
export type ThemeModeSystem = typeof THEME_MODE_SYSTEM;
export type ThemeMode = ThemeModeLight | ThemeModeDark;
export type ThemeModeSelection = ThemeModeLight | ThemeModeDark | ThemeModeSystem;

/**
 * Theme configs pair light and dark themes
 */
export interface ThemeModesConfig {
  light: ThemeConfig | null; // Light theme configuration
  dark: ThemeConfig | null; // Dark theme configuration
}

/**
 * Themes data structure containing multiple named themes
 */
export type ThemesData = Record<string, ThemeModesConfig>;

/**
 * Options for theme management
 */
export interface ThemeOptions {
  /** Default theme to use if none is stored */
  defaultTheme?: string;
  /** Whether to save theme preference to localStorage */
  persistTheme?: boolean;
  /** Local storage key to use for saving theme preference */
  storageThemeKey?: string;
  /** Local storage key to use for saving theme mode preference */
  storageThemeModeKey?: string;
}
