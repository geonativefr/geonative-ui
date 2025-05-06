export const THEME_MODE_LIGHT = 'light';
export const THEME_MODE_DARK = 'dark';
export const THEME_MODE_SYSTEM = 'system';
export const THEME_MODES = [THEME_MODE_LIGHT, THEME_MODE_DARK];
export const THEME_MODES_SELECTION = [THEME_MODE_LIGHT, THEME_MODE_DARK, THEME_MODE_SYSTEM];

export const DEFAULT_THEME = 'default';
export const DEFAULT_THEME_MODES_CONFIG = {
  light: {
    background: 'white',
    foreground: 'black',
    primary: 'blue',
    'primary-foreground': 'white',
    secondary: 'gray',
    'secondary-foreground': 'black',
    card: 'white',
    'card-foreground': 'black',
    popover: 'white',
    'popover-foreground': 'black',
    muted: 'gray',
    'muted-foreground': 'black',
    accent: 'blue',
    'accent-foreground': 'white',
    destructive: 'red',
    'destructive-foreground': 'white',
    border: '#eaeaea',
    input: '#f5f5f5',
    ring: '#eaeaea',
  },
  dark: {
    background: 'black',
    foreground: 'white',
    primary: 'blue',
    'primary-foreground': 'white',
    secondary: 'gray',
    'secondary-foreground': 'white',
    card: 'black',
    'card-foreground': 'white',
    popover: 'black',
    'popover-foreground': 'white',
    muted: 'gray',
    'muted-foreground': 'white',
    accent: 'blue',
    'accent-foreground': 'white',
    destructive: 'red',
    'destructive-foreground': 'white',
    border: '#444444',
    input: '#333333',
    ring: '#444444',
  }
}
