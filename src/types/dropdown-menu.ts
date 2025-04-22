import type { IconSource, IconType } from './icon.ts';

export interface DropdownMenuType {
  label?: string;
  sections: DropdownMenuSectionType[];
}

export type DropdownMenuSectionType = DropdownMenuItemType[];

export interface DropdownMenuItemType {
  iconProps?: {
    name: string;
    source: IconSource;
    type?: IconType;
    class?: string;
  };
  label?: string;
  url?: string;
  disabled?: boolean;
  shortcut?: string;
  sections?: DropdownMenuSectionType[];
}