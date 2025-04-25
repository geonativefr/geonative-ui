import type { IconProps } from './icon.ts';

export interface DropdownMenuType {
  label?: string;
  sections: DropdownMenuSectionType[];
}

export type DropdownMenuSectionType = DropdownMenuItemType[];

export interface DropdownMenuItemType {
  iconProps?: IconProps;
  label?: string;
  click: clickActionType;
  disabled?: boolean;
  shortcut?: string;
  sections?: DropdownMenuSectionType[];
}

export type urlType = string;
export type callbackType = () => void | Promise<void>;
export type clickActionType = urlType | callbackType | null;


