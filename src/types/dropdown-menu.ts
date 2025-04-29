import type { IconProps } from './icon.ts';
import type { ClickActionType } from './action.ts';
import type { AvatarProps } from './avatar.ts';

export interface DropdownMenuType {
  label?: string;
  sections: DropdownMenuSectionType[];
}

export type DropdownMenuSectionType = DropdownMenuItemType[];

export interface DropdownMenuItemType {
  iconProps?: IconProps;
  avatarProps?: AvatarProps;
  label?: string;
  clickAction?: ClickActionType;
  disabled?: boolean;
  shortcut?: string;
  sections?: DropdownMenuSectionType[];
}
