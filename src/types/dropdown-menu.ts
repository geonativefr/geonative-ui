export interface DropdownMenu {
  name?: string;
  sections: DropdownMenuSection[];
}

export type DropdownMenuSection = DropdownMenuItem[];

export interface DropdownMenuItem {
  icon?: string | HTMLElement;
  label: string;
  url?: string;
  disabled?: boolean;
  shortcut?: string;
  sections?: DropdownMenuSection[];
}
