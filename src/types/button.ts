export interface Button {
  label: string;
  size?: 'default' | 'sm' | 'lg' | 'icon' | null;
  color?: string;
  onClick?: () => void;
  disabled?: boolean;
}