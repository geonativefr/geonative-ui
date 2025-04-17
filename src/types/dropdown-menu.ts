export interface DropdownMenu {
  name?: string;
  sections: DropdownMenuSection[];
}

export type DropdownMenuSection = DropdownMenuItem[];

export interface DropdownMenuItem {
  iconProps?: {
    name: string;
    source: string;
    type?: string;
    class?: string;
  };
  label?: string;
  url?: string;
  disabled?: boolean;
  shortcut?: string;
  sections?: DropdownMenuSection[];
}