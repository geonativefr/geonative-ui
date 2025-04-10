export interface DropdownMenu {
  name: string;
  sections: DropdownSection[];
}

export type DropdownSection = DropdownMenuItem[];

export interface DropdownMenuItem {
  label: string;
  url?: string;
  disabled?: boolean;
  shortcut?: string;
  sections?: DropdownSection[];
}
