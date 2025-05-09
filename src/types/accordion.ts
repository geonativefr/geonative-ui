import type { IconProps } from '@geonative/ui/types';

export interface AccordionItem {
  label: string;
  content: string;
  iconProps?: IconProps;
}

export interface AccordionProps {
  items: AccordionItem[];
  multiple?: boolean;
  collapsible?: boolean;
}
