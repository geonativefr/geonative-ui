export interface DropdownMenu {
  name?: string;
  sections: DropdownMenuSection[];
}

export type DropdownMenuSection = DropdownMenuItem[];

export interface DropdownMenuItem {
  iconProps?: {
    name: string;
    source: 'svg' | 'lucide' | 'heroicons';
    type?: 'solid' | 'outline' | undefined;
    class?: string;
  };
  label?: string;
  url?: string;
  disabled?: boolean;
  shortcut?: string;
  sections?: DropdownMenuSection[];
}
