import type { AvatarProps } from '@geonative/ui/types/avatar.ts';

export type IconSource = 'svg' | 'lucide' | 'heroicons' | 'avatar';
export type IconType = 'solid' | 'outline' | undefined;

export interface IconProps {
  name: string;
  source: IconSource;
  type?: IconType;
  class?: string;
  avatarProps?: AvatarProps
}
