import type { Component } from 'vue';

export interface DropdownMenu {
  name?: string;
  sections: DropdownMenuSection[];
}

export type DropdownMenuSection = DropdownMenuItem[];

export interface DropdownMenuItem {
  icon?: Component;
  iconProps?: Record<string, unknown>;
  label?: string;
  url?: string;
  disabled?: boolean;
  shortcut?: string;
  sections?: DropdownMenuSection[];
}
