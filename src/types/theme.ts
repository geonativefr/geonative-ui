/**
 * Theme configuration interface defining color properties for a theme
 */
export interface ThemeConfig {
  background: string; // Background color for the theme
  foreground: string; // Foreground color for text
  primary: string; // Primary background color
  "primary-foreground": string; // Primary foreground color
  secondary?: string; // Secondary background color
  "secondary-foreground"?: string; // Secondary foreground color
  card?: string; // Card background color
  "card-foreground"?: string; // Card foreground color
  popover?: string; // Popover background color
  "popover-foreground"?: string; // Popover foreground color
  muted?: string; // Muted background color
  "muted-foreground"?: string; // Muted foreground color
  accent?: string; // Accent background color
  "accent-foreground"?: string; // Accent color foreground
  destructive?: string; // Destructive action color background
  "destructive-foreground"?: string; // Destructive action color foreground
  border?: string; // Border color
  input?: string; // Input field background color
  ring?: string; // Ring color
  radius?: string; // Border radius
  [key: string]: string | undefined; // Allow additional custom properties
}

/**
 * Themes data structure containing multiple named themes
 */
export type ThemesData = Map<string, ThemeConfig>;

/**
 * Options for theme management
 */
export interface ThemeOptions {
  /** Default theme to use if none is stored */
  defaultTheme: string;
  /** Whether to save theme preference to localStorage */
  persistTheme?: boolean;
  /** Local storage key to use for saving theme preference */
  storageKey?: string;
}
