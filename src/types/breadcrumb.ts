export interface BreadcrumbType {
  items: BreadcrumbItemType[];
  separator?: string;
}

export interface BreadcrumbItemType {
  title: string;
  link?: string;
  disabled?: boolean;
}
