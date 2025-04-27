import { ref, computed, watch, onMounted } from 'vue';
import type { ThemeConfig, ThemesData, ThemeOptions, ThemeMode } from '@geonative/ui/types';

// Singleton state - stored outside the function to be shared across all calls
const themeRegistry = ref<ThemesData>({});
const currentTheme = ref<string | null>(null);
const prefersDarkScheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
const selectedDarkMode = ref<boolean>(false);
const currentThemeMode = computed<ThemeMode>(() => {
  // Check if dark mode is explicitly set by the user
  if (selectedDarkMode.value !== null) {
    return selectedDarkMode.value ? 'dark' : 'light';
  }
  // Check if the user has a preference for dark mode in their system settings
  if (prefersDarkScheme) {
    return prefersDarkScheme.matches ? 'dark' : 'light';
  }
  // Default to light mode if no preference is set
  return 'light';
});
let defaultTheme: string | null = null;
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

      // Get stored dark mode preference
      const storedDarkMode = persistTheme ? localStorage.getItem('dark-mode') : null;
      selectedDarkMode.value = storedDarkMode === 'true';

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
          themeRegistry.value[themeName]['light'] = themeConfig.light;
        } catch (err) {
          console.error(`Error initializing light theme '${themeName}':`, err);
        }
      }
      if (themeConfig.dark) {
        try {
          themeRegistry.value[themeName]['dark'] = themeConfig.dark;
        } catch (err) {
          console.error(`Error initializing dark theme '${themeName}':`, err);
        }
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
    if (!themeRegistry.value[themeName] || !themeRegistry.value[themeName][currentThemeMode.value]) {
      console.error(`Theme '${themeName}' not found.`);
      return false;
    }
    console.log('Applying theme:', themeName, 'mode:', currentThemeMode.value);

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
   * Sets the dark mode preference
   *
   * @param isDark - Boolean indicating if dark mode should be enabled
   */
  const setDarkMode = (isDark: boolean) => {
    selectedDarkMode.value = isDark;

    if (persistTheme && isDark !== null) {
      localStorage.setItem('dark-mode', String(isDark));
    } else if (persistTheme) {
      localStorage.removeItem('dark-mode');
    }

    // Re-apply current theme with new mode if one is active
    if (currentTheme.value) {
      applyTheme(currentTheme.value);
    }
  };

  // Watch for system preference changes
  onMounted(() => {
    if (prefersDarkScheme) {
      prefersDarkScheme.addEventListener('change', () => {
        // Only update if user hasn't explicitly set a preference
        if (selectedDarkMode.value === null) {
          // Re-apply current theme with new system preference
          if (currentTheme.value) {
            applyTheme(currentTheme.value);
          }
        }
      });
    }

    // Apply the current theme on mount if it exists
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

  // Watch for changes to the dark mode preference and apply it
  watch(selectedDarkMode, (newMode) => {
    if (newMode !== null) {
      if (persistTheme) {
        localStorage.setItem('dark-mode', newMode.toString());
      }
      applyTheme(currentTheme.value || defaultTheme || '');
    }
  });

  return {
    currentTheme,
    currentThemeMode,
    availableThemes,
    resetTheme,
    initializeThemes,
    applyTheme,
    setDarkMode,
    getThemeConfig,
  };
}
