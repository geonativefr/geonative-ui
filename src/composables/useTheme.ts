import { ref, computed } from 'vue';
import type { ThemeConfig, ThemesData, ThemeOptions } from '@geonative/ui/types';

/**
 * Composable for managing dynamic themes in a Vue application.
 * Provides functionality to apply, create, and manage themes.
 *
 * @param themesData - Record of theme names to their configurations
 * @param options - Optional configuration options for the theme manager
 * @returns Object with theme management functions and reactive properties
 */
export function useTheme(themesData: ThemesData, options: ThemeOptions) {
  // Extract and set default options
  const { defaultTheme, persistTheme = true, storageKey = 'app-theme' } = options;

  // Internal storage for themes as a reactive map
  const themeRegistry = ref<ThemesData>(new Map());

  /**
   * Initializes the theme registry with the provided themes data
   */
  const initializeThemes = (): void => {
    for (const [themeName, themeConfig] of Object.entries(themesData)) {
      try {
        themeRegistry.value.set(themeName, themeConfig);
      } catch (err) {
        console.error(`Error initializing theme '${themeName}':`, err);
      }
    }
  };

  // Initialize themes
  initializeThemes();

  // Computed list of available themes
  const availableThemes = computed(() => Array.from(themeRegistry.value.keys()));

  // Get stored theme preference or use default
  const storedTheme = persistTheme ? localStorage.getItem(storageKey) : null;
  const currentTheme = ref<string>(storedTheme && themeRegistry.value.has(storedTheme) ? storedTheme : defaultTheme);

  /**
   * Applies a theme by setting CSS variables and managing theme classes
   *
   * @param themeName - Name of the theme to apply
   * @returns Boolean indicating if the theme was successfully applied
   */
  const applyTheme = (themeName: string): boolean => {
    // Validate theme exists
    if (!themeRegistry.value.has(themeName)) {
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
      const theme = themeRegistry.value.get(themeName);
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
   * Gets the configuration for a specific theme
   *
   * @param themeName - Name of the theme to get
   * @returns ThemeConfig object or null if theme doesn't exist
   */
  const getThemeConfig = (themeName: string): ThemeConfig | null => {
    return themeRegistry.value.get(themeName) || null;
  };

  return {
    currentTheme,
    availableThemes,
    applyTheme,
    getThemeConfig,
  };
}
