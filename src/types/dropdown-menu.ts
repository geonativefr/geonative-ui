import type { IconProps } from './icon.ts';

export interface DropdownMenuType {
  label?: string;
  sections: DropdownMenuSectionType[];
}

export type DropdownMenuSectionType = DropdownMenuItemType[];

export interface DropdownMenuItemType {
  iconProps?: IconProps;
  label?: string;
  action: string | (() => void) | (() => Promise<void>) | null;
  disabled?: boolean;
  shortcut?: string;
  sections?: DropdownMenuSectionType[];
}
