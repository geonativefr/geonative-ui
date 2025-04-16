import type { RouteRecord } from '@geonative/ui/types';

export function createRoute(route: RouteRecord): RouteRecord {
  return {
    showInMenu: true, // Default value
    menuLabel: route.name?.toString() || '', // Default label from name
    ...route, // This allows overriding the default
  };
}
