export interface DropdownMenu {
  name?: string;
  sections: DropdownMenuSection[];
}

export type DropdownMenuSection = DropdownMenuItem[];

export interface DropdownMenuItem {
  icon?: any;
  label: string;
  url?: string;
  disabled?: boolean;
  shortcut?: string;
  sections?: DropdownMenuSection[];
}
