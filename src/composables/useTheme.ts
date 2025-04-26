import { ref, computed, watch, onMounted } from 'vue';
import type { ThemeConfig, ThemesData, ThemeOptions } from '@geonative/ui/types';

// Singleton state - stored outside the function to be shared across all calls
const themeRegistry = ref<ThemesData>({});
const currentTheme = ref<string|null>(null);
let defaultTheme: string|null = null;
let persistTheme: boolean = true;
let storageKey: string = 'app-theme';
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
        storageKey = options.storageKey || storageKey;
      }

      // Get stored theme preference or use default
      const storedTheme = persistTheme ? localStorage.getItem(storageKey) : null;
      currentTheme.value = storedTheme || defaultTheme || null;

      isInitialized = true;
    }

    // Update theme registry with provided themes
    for (const [themeName, themeConfig] of Object.entries(themesData)) {
      try {
        themeRegistry.value[themeName] = themeConfig;
      } catch (err) {
        console.error(`Error initializing theme '${themeName}':`, err);
      }
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
    if (!themeRegistry.value[themeName]) {
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
      const theme = themeRegistry.value[themeName];
      if (theme) {
        for (const [key, value] of Object.entries(theme)) {
          if (value) {
            document.documentElement.style.setProperty(`--${key}`, value);
          }
        }
      }

      // Save theme preference if persistence is enabled
      if (persistTheme) {
        localStorage.setItem(storageKey, themeName);
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
      localStorage.removeItem(storageKey);
    }
    currentTheme.value = null;
  }

  /**
   * Gets the configuration for a specific theme
   *
   * @param themeName - Name of the theme to get
   * @returns ThemeConfig object or null if theme doesn't exist
   */
  const getThemeConfig = (themeName: string): ThemeConfig | null => {
    return themeRegistry.value[themeName] || null;
  };

  // Apply the current theme on mount if it exists
  onMounted(() => {
    if (currentTheme.value) {
      applyTheme(currentTheme.value);
    }
  });

  // Watch for changes to the current theme and apply it
  watch(currentTheme, (newTheme) => {
    if (newTheme) {
      applyTheme(newTheme);
    }
  });

  return {
    currentTheme,
    availableThemes,
    resetTheme,
    initializeThemes,
    applyTheme,
    getThemeConfig,
  };
}