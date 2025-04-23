import type { DropdownMenuSectionType } from './dropdown-menu';

export interface NavbarUserType {
  user: {
    name: string;
    email: string;
    avatar?: string;
  };
  sections: DropdownMenuSectionType[];
}