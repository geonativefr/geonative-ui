import { computed, ref, watch } from 'vue';
import type { ThemeConfig, ThemeMode, ThemeModeSelection, ThemeOptions, ThemesData } from '@geonative/ui/types';
import { THEME_MODE_DARK, THEME_MODE_LIGHT, THEME_MODE_SYSTEM } from '@geonative/ui/constants/theme.ts';

// Singleton state - stored outside the function to be shared across all calls
const themeRegistry = ref<ThemesData>({});
const currentTheme = ref<string | null>(null);
const prefersDarkScheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
const selectedThemeMode = ref<ThemeModeSelection>(THEME_MODE_SYSTEM);
const currentThemeMode = computed<ThemeMode>(() => {
  // Check if the user has a preference for dark mode in their system settings
  if (selectedThemeMode.value == THEME_MODE_SYSTEM && prefersDarkScheme) {
    return prefersDarkScheme.matches ? THEME_MODE_DARK : THEME_MODE_LIGHT;
  }
  // Check if dark mode is explicitly set by the user
  return selectedThemeMode.value == THEME_MODE_DARK ? THEME_MODE_DARK : THEME_MODE_LIGHT;
});
let defaultTheme: string | null = null;
let persistTheme: boolean = true;
let storageThemeKey: string = 'app-theme';
let storageThemeModeKey: string = 'app-theme-mode';
let isInitialized = false;

/**
 * Composable for managing dynamic themes in a Vue application.
 * Provides functionality to apply, create, and manage themes.
 * Uses a singleton pattern to ensure consistent state across multiple calls.
 *
 * @returns Object with theme management functions and reactive properties
 */
export function useTheme() {
  // Computed list of available themes
  const availableThemes = computed(() => Object.keys(themeRegistry.value));

  /**
   * Initializes the theme registry with the provided themes data
   * @param themesData - Record of theme names to their configurations
   * @param options - Optional configuration options for the theme manager
   */
  const initializeThemes = (themesData: ThemesData, options?: ThemeOptions): void => {
    // Only fully initialize once
    if (!isInitialized) {
      // Check if options are provided
      if (options) {
        // Update options with provided values
        defaultTheme = options.defaultTheme || defaultTheme;
        persistTheme = options.persistTheme !== undefined ? options.persistTheme : persistTheme;
        storageThemeKey = options.storageThemeKey || storageThemeKey;
        storageThemeModeKey = options.storageThemeModeKey || storageThemeModeKey;
      }

      // Get stored theme preference or use default
      const storedTheme = persistTheme ? localStorage.getItem(storageThemeKey) : null;
      currentTheme.value = storedTheme || defaultTheme || null;

      // Get stored theme mode preference
      const storedThemeMode: ThemeMode = (localStorage.getItem(storageThemeModeKey) as ThemeMode) || null;
      selectedThemeMode.value = storedThemeMode ? storedThemeMode : THEME_MODE_SYSTEM;

      // Apply theme mode preference if set
      if (prefersDarkScheme) {
        prefersDarkScheme.addEventListener('change', () => {
          // Only if system mode is selected
          if (selectedThemeMode.value == THEME_MODE_SYSTEM) {
            // Re-apply current theme with new system preference
            if (currentTheme.value) {
              applyTheme(currentTheme.value);
            }
          }
        });
      }

      isInitialized = true;
    }

    // Update theme registry with provided themes
    for (const [themeName, themeConfig] of Object.entries(themesData)) {
      // Ensure the theme entry exists in the registry
      if (!themeRegistry.value[themeName]) {
        themeRegistry.value[themeName] = {
          light: null, // Default to null for light mode
          dark: null, // Default to null for dark mode
        };
      }
      // Light and dark mode themes
      if (themeConfig.light) {
        try {
          themeRegistry.value[themeName][THEME_MODE_LIGHT] = themeConfig.light;
        } catch (err) {
          console.error(`Error initializing light theme '${themeName}':`, err);
        }
      }
      if (themeConfig.dark) {
        try {
          themeRegistry.value[themeName][THEME_MODE_DARK] = themeConfig.dark;
        } catch (err) {
          console.error(`Error initializing dark theme '${themeName}':`, err);
        }
      }
    }

    // Apply the stored theme if it exists
    if (currentTheme.value) {
      applyTheme(currentTheme.value);
    } else if (defaultTheme) {
      applyTheme(defaultTheme);
    }
  };

  /**
   * Applies a theme by setting CSS variables and managing theme classes
   *
   * @param themeName - Name of the theme to apply
   * @returns Boolean indicating if the theme was successfully applied
   */
  const applyTheme = (themeName: string): boolean => {
    // Validate theme exists
    if (!themeRegistry.value[themeName] || !themeRegistry.value[themeName][currentThemeMode.value]) {
      console.error(`Theme '${themeName}' not found.`);
      return false;
    }

    try {
      // Remove all existing theme classes
      availableThemes.value.forEach((theme) => {
        document.documentElement.classList.remove(theme);
      });

      // Add the selected theme class (except for default theme)
      if (themeName !== defaultTheme) {
        document.documentElement.classList.add(themeName);
      }

      // Apply CSS variables from theme config
      const theme = themeRegistry.value[themeName][currentThemeMode.value];
      if (theme) {
        for (const [key, value] of Object.entries(theme)) {
          if (value) {
            document.documentElement.style.setProperty(`--${key}`, value);
          }
        }
      }

      // Save theme preference if persistence is enabled
      if (persistTheme) {
        localStorage.setItem(storageThemeKey, themeName);
      }

      currentTheme.value = themeName;
      return true;
    } catch (err) {
      console.error(`Error applying theme '${themeName}':`, err);
      return false;
    }
  };

  /**
   * Resets the theme
   */
  const resetTheme = () => {
    // Remove all theme classes
    availableThemes.value.forEach((theme) => {
      document.documentElement.classList.remove(theme);
    });
    // Reset CSS variables
    for (const key in themeRegistry.value[defaultTheme || '']) {
      document.documentElement.style.removeProperty(`--${key}`);
    }
    // Clear stored theme preference
    if (persistTheme) {
      localStorage.removeItem(storageThemeKey);
    }
    currentTheme.value = null;
  };

  /**
   * Gets the configuration for a specific theme
   *
   * @param themeName - Name of the theme to get
   * @param themeMode - Mode of the theme (light or dark)
   * @returns ThemeConfig object or null if theme doesn't exist
   */
  const getThemeConfig = (themeName: string, themeMode?: ThemeMode): ThemeConfig | null => {
    // Check if theme exists
    if (!themeRegistry.value[themeName]) {
      return null;
    }
    // Use provided mode or fall back to current mode
    const mode = themeMode || (currentThemeMode.value as ThemeMode);
    // Return the theme config for the specified mode
    return themeRegistry.value[themeName][mode] || null;
  };

  /**
   * Sets the theme mode preference
   *
   * @param themeMode - Theme mode to set (light or dark)
   */
  const setThemeMode = (themeMode: ThemeModeSelection) => {
    // Apply the selected theme mode
    selectedThemeMode.value = themeMode;
    // Save the selected theme mode if persistence is enabled
    localStorage.setItem(storageThemeModeKey, themeMode);
    // Re-apply current theme with new mode if one is active
    if (currentTheme.value) {
      applyTheme(currentTheme.value);
    }
  };

  // Watch for changes to the dark mode preference and apply it
  watch(selectedThemeMode, (newMode) => {
    if (persistTheme) {
      localStorage.setItem(storageThemeModeKey, newMode.toString());
    }
  });

  return {
    currentTheme,
    currentThemeMode,
    selectedThemeMode,
    availableThemes,
    resetTheme,
    initializeThemes,
    applyTheme,
    setThemeMode,
    getThemeConfig,
  };
}
