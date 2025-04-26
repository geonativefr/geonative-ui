import { ref, computed, onMounted, watch } from 'vue';
import type { ThemeConfig, ThemesData, ThemeOptions } from '@geonative/ui/types';

/**
 * Composable for managing dynamic themes in a Vue application.
 * Provides functionality to apply, create, and manage themes.
 *
 * @param themesData - Record of theme names to their configurations
 * @param options - Optional configuration options for the theme manager
 * @returns Object with theme management functions and reactive properties
 */
export function useTheme(
  themesData: ThemesData,
  options: ThemeOptions,
) {

  // Extract and set default options
  const {
    defaultTheme,
    persistTheme = true,
    storageKey = 'app-theme'
  } = options;

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
  const currentTheme = ref<string>(
    storedTheme && themeRegistry.value.has(storedTheme) ? storedTheme : defaultTheme
  );

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
      availableThemes.value.forEach(theme => {
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
   * Registers a new theme or updates an existing theme
   *
   * @param themeName - Name of the theme
   * @param themeConfig - Theme configuration object
   * @returns Boolean indicating if the theme was successfully registered
   */
  const registerTheme = (themeName: string, themeConfig: ThemeConfig): boolean => {
    try {
      // Validate theme name
      if (!themeName || themeName.trim() === '') {
        console.error('registerTheme - Theme name cannot be empty');
        return false;
      }

      // Add to registry
      themeRegistry.value.set(themeName, themeConfig);

      // Create or update CSS rules for the theme
      const styleId = `theme-style-${themeName}`;
      let styleEl = document.getElementById(styleId) as HTMLStyleElement;

      if (!styleEl) {
        styleEl = document.createElement('style');
        styleEl.id = styleId;
        document.head.appendChild(styleEl);
      }

      let css = `.${themeName} {\n`;
      for (const [key, value] of Object.entries(themeConfig)) {
        if (value) {
          css += `  --${key}: ${value};\n`;
        }
      }
      css += '}\n';
      styleEl.textContent = css;

      return true;
    } catch (err) {
      console.error(`Error registering theme '${themeName}':`, err);
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

  /**
   * Resets all themes to their initial values from themesData
   */
  const resetThemes = (): void => {
    // Clear existing registry
    themeRegistry.value.clear();

    // Remove all theme style elements
    availableThemes.value.forEach(themeName => {
      const styleEl = document.getElementById(`theme-style-${themeName}`);
      if (styleEl) {
        styleEl.remove();
      }
    });

    // Re-initialize from themes data
    initializeThemes();

    // Reapply current theme or fallback to default
    if (themeRegistry.value.has(currentTheme.value)) {
      applyTheme(currentTheme.value);
    } else {
      applyTheme(defaultTheme);
    }
  };

  /**
   * Import themes from a themes data object
   *
   * @param themes - Record of theme names to their configurations
   * @returns Number of successfully imported themes
   */
  const importThemes = (themes: ThemesData): number => {
    let importCount = 0;

    for (const [themeName, themeConfig] of Object.entries(themes)) {
      try {
        if (registerTheme(themeName, themeConfig)) {
          importCount++;
        }
      } catch (err) {
        console.error(`Error importing theme '${themeName}':`, err);
      }
    }

    return importCount;
  };

  // Apply theme when component is mounted
  onMounted(() => {
    applyTheme(currentTheme.value);
  });

  // Watch for theme changes and apply them
  watch(currentTheme, (newTheme) => {
    if (newTheme !== currentTheme.value) {
      applyTheme(newTheme);
    }
  });

  return {
    currentTheme,
    availableThemes,
    applyTheme,
    registerTheme,
    getThemeConfig,
    resetThemes,
    importThemes,
  };
}