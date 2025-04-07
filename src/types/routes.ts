import type { RouteRecordRaw } from 'vue-router';

export type RouteRecord = RouteRecordRaw & {
  showInMenu?: boolean;
  menuLabel?: string;
};

export function createRoute(route: RouteRecord): RouteRecord {
  return {
    showInMenu: true, // Default value
    menuLabel: route.name?.toString() || '', // Default label from name
    ...route, // This allows overriding the default
  };
}
