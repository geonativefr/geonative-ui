export interface DropdownMenuType {
  name?: string;
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

export type IconSource = 'svg' | 'lucide' | 'heroicons';
export type IconType = 'solid' | 'outline' | undefined;
