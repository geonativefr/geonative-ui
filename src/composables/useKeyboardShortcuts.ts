import { ref, onMounted, onUnmounted } from 'vue';
import type { Shortcut, ModifierKeys, UseKeyboardShortcutsReturn } from '@/types';
/**
 * Vue composable for managing keyboard shortcuts that redirect to specific links
 *
 * @param autoEnable Whether to automatically enable the listener on mount (default: true)
 * @returns An object with methods to manage keyboard shortcuts
 */
export function useKeyboardShortcuts(
  autoEnable: boolean = true
): UseKeyboardShortcutsReturn {
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
    const normalizedModifiers = modifiers?.map(modifier => modifier.toLowerCase()) || []
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
    return requiredModifiers.every(modifier => {
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
    console.log('Key pressed:', event.key);
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
      if (url) {
        // Navigate to the URL
        if (url.startsWith('http://') || url.startsWith('https://')) {
          window.location.href = url;
        } else {
          // For Vue Router paths, use router.push
          // This assumes router is available globally or imported
          // For a more robust solution, router should be passed as a parameter
          if (window.history && typeof window.history.pushState === 'function') {
            window.history.pushState({}, '', url);
            // Dispatch a popstate event to trigger router navigation
            window.dispatchEvent(new Event('popstate'));
          } else {
            // Fallback
            window.location.pathname = url;
          }
        }
      }
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

  // Setup and cleanup
  onMounted(() => {
    console.log('useKeyboardShortcuts mounted');
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
    getShortcuts
  };
}
