import type { IconProps } from './icon.ts';
import type { ClickActionType } from './action.ts';

export interface DropdownMenuType {
  label?: string;
  sections: DropdownMenuSectionType[];
}

export type DropdownMenuSectionType = DropdownMenuItemType[];

export interface DropdownMenuItemType {
  iconProps?: IconProps;
  label?: string;
  clickAction?: ClickActionType;
  disabled?: boolean;
  shortcut?: string;
  sections?: DropdownMenuSectionType[];
}
