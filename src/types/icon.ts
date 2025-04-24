export type IconSource = 'svg' | 'lucide' | 'heroicons';
export type IconType = 'solid' | 'outline' | undefined;

export interface IconProps {
  name: string;
  source: IconSource;
  type?: IconType;
  class?: string;
}