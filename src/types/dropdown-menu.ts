export interface DropdownMenuItem {
  title: string;
  shortcut?: string;
  link?: string;
  submenu?: DropdownMenuItem[];
  separator?: boolean;
  disabled?: boolean;
}

export interface DropdownMenuGroup {
  group: DropdownMenuItem[];
}

export interface DropdownMenuCategory {
  category: string;
  items: DropdownMenuGroup[];
}
