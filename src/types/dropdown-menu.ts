import type { IconProps } from './icon.ts';
import type { clickActionType } from './action.ts';

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




