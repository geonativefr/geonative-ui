export interface Breadcrumb {
  items: BreadcrumbItem[];
  separator?: string;
}

export interface BreadcrumbItem {
  title: string;
  link?: string;
  disabled?: boolean;
}
