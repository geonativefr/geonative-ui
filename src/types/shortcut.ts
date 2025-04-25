import type { Ref } from 'vue';

/**
 * Modifier keys for keyboard shortcuts
 */
export type ModifierKeys = 'ctrl' | 'control' | 'alt' | 'shift' | 'meta' | 'cmd' | 'command';

/*
 * Map of modifier keys to their string representations
 */
export type ModifierKeyString = {
  [key in ModifierKeys]: string;
};

/**
 * Interface for keyboard shortcut
 */
export interface Shortcut {
  /** The URL to redirect to when the shortcut is triggered */
  url: string;
  /** Optional modifier keys for this specific shortcut */
  keyConfig: ShortcutKeyConfig;
}

/**
 * Interface for keyboard shortcut keys configuration
 */
export interface ShortcutKeyConfig {
  /** The keyboard key (e.g., 'h', '1', 'ArrowUp') */
  key: string;
  /** Optional modifier keys for this specific shortcut */
  modifiers?: ModifierKeys[];
}

/**
 * Interface for the return values of useKeyboardShortcuts
 */
export interface UseKeyboardShortcutsReturn {
  /** Whether the keyboard shortcut listener is enabled */
  isEnabled: Ref<boolean>;
  /** Register a new keyboard shortcut */
  register: (key: string, url: string, modifiers?: ModifierKeys[]) => void;
  /** Unregister a keyboard shortcut */
  unregister: (key: string) => void;
  /** Enable the keyboard shortcut listener */
  enable: () => void;
  /** Disable the keyboard shortcut listener */
  disable: () => void;
  /** Get all registered shortcuts */
  getShortcuts: () => Map<string, Shortcut>;
  /** Get a string version of the keyboard shortcut keys */
  getShortcutKeysString: (keyConfig: ShortcutKeyConfig) => string;
}
