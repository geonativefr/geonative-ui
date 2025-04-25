import { ref, onMounted, onUnmounted } from 'vue';
import type { ModifierKeys, Shortcut, ShortcutKeyConfig, UseKeyboardShortcutsReturn } from '@geonative/ui/types';
import { modifierKeyStringMap, SHORTCUT_STRING_SEPARATOR } from '@geonative/ui/constants';

/**
 * Vue composable for managing keyboard shortcuts that redirect to specific links
 *
 * @param autoEnable Whether to automatically enable the listener on mount (default: true)
 * @returns An object with methods to manage keyboard shortcuts
 */
export function useKeyboardShortcuts(autoEnable: boolean = true): UseKeyboardShortcutsReturn {
  const shortcuts = ref<Map<string, Shortcut>>(new Map());
  const isEnabled = ref<boolean>(false);

  /**
   * Registers a new keyboard shortcut
   * @param key The keyboard key (e.g., 'h', '1', 'ArrowUp')
   * @param url The URL to redirect to when the shortcut is triggered
   * @param modifiers Optional array of modifier keys specific to this shortcut
   * @return void
   */
  const register = (key: string, url: string, modifiers?: ModifierKeys[]): void => {
    const normalizedKey = key.toLowerCase();
    const normalizedModifiers = modifiers?.map((modifier) => modifier.toLowerCase()) || [];

    shortcuts.value.set(normalizedKey, {
      url,
      keyConfig: {
        key: normalizedKey,
        modifiers: normalizedModifiers as ModifierKeys[],
      },
    });
  };

  /**
   * Unregisters a keyboard shortcut
   * @param key The keyboard key to unregister
   * @returns void
   */
  const unregister = (key: string): void => {
    const normalizedKey = key.toLowerCase();
    shortcuts.value.delete(normalizedKey);
  };

  /**
   * Checks if all required modifier keys are pressed
   * @param event The keyboard event
   * @param requiredModifiers Array of required modifier keys to check
   * @returns Whether all required modifier keys are pressed
   */
  const checkModifiers = (event: KeyboardEvent, requiredModifiers?: string[]): boolean => {
    // If no modifier keys required, return true
    if (!requiredModifiers || requiredModifiers.length === 0) {
      return true;
    }

    // Check that all required modifiers are pressed
    return requiredModifiers.every((modifier) => {
      switch (modifier.toLowerCase()) {
        case 'ctrl':
        case 'control':
          return event.ctrlKey;
        case 'alt':
          return event.altKey;
        case 'shift':
          return event.shiftKey;
        case 'meta':
        case 'cmd':
        case 'command':
          return event.metaKey;
        default:
          return false;
      }
    });
  };

  /**
   * Handles the keydown event, checking if a registered shortcut was triggered
   * @param event The keyboard event
   * @returns void
   */
  const handleKeyDown = (event: KeyboardEvent): void => {
    const key = event.key.toLowerCase();

    // If the pressed key is registered as a shortcut
    if (shortcuts.value.has(key)) {
      // Get the shortcut config
      const shortcut = shortcuts.value.get(key);

      if (!shortcut) return;

      // Check if all required modifier keys are pressed
      // Use specific modifiers for this shortcut if available, otherwise use default modifiers
      const modifiersPressed = checkModifiers(event, shortcut.keyConfig.modifiers);
      if (!modifiersPressed) {
        return;
      }

      event.preventDefault();

      const url = shortcut.url;
      if (!url) {
        console.error(`No URL registered for shortcut: ${key}`);
        return;
      }

      // Navigate to the URL
      if (url.startsWith('http://') || url.startsWith('https://')) {
        window.location.href = url;
        return;
      }

      // For SPA navigation, use the history API if available
      if (window.history && typeof window.history.pushState === 'function') {
        window.history.pushState({}, '', url);
        // Dispatch a popstate event to trigger router navigation
        window.dispatchEvent(new Event('popstate'));
        return;
      }

      // For hash-based navigation, use window.location.hash
      if (url.startsWith('#')) {
        window.location.hash = url;
        return;
      }

      // Fallback
      window.location.pathname = url;
      return;

    }
  };

  /**
   * Enables the keyboard shortcut listener
   * @returns void
   */
  const enable = (): void => {
    if (!isEnabled.value) {
      document.addEventListener('keydown', handleKeyDown);
      isEnabled.value = true;
    }
  };

  /**
   * Disables the keyboard shortcut listener
   * @returns void
   */
  const disable = (): void => {
    if (isEnabled.value) {
      document.removeEventListener('keydown', handleKeyDown);
      isEnabled.value = false;
    }
  };

  /**
   * Returns all registered shortcuts
   * @returns A Map of registered shortcuts
   */
  const getShortcuts = (): Map<string, Shortcut> => {
    return new Map(shortcuts.value);
  };

  /**
   * Return string representation of shortcut keys
   * @param keyConfig The shortcut key configuration
   * @returns string - A string representation of the shortcut keys
   */
  const getShortcutKeysString = (keyConfig: ShortcutKeyConfig): string => {
    // Check if keyConfig has modifiers
    if (keyConfig.modifiers && keyConfig.modifiers.length > 0) {
      const modifiersString = keyConfig.modifiers
        .map((modifier) => modifierKeyStringMap[modifier])
        .join(SHORTCUT_STRING_SEPARATOR);
      return `${modifiersString}${SHORTCUT_STRING_SEPARATOR}${keyConfig.key}`;
    }
    // If no modifiers, return the key only
    return keyConfig.key;
  };

  // Setup and cleanup
  onMounted(() => {
    if (autoEnable) {
      enable();
    }
  });

  onUnmounted(() => {
    // Always clean up event listeners when component is unmounted
    disable();
  });

  return {
    isEnabled,
    register,
    unregister,
    enable,
    disable,
    getShortcuts,
    getShortcutKeysString,
  };
}
