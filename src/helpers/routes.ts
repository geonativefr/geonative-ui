import type { Component } from 'vue';
import type { RouteRecordRaw } from 'vue-router';

/**
 * Default layout for all routes
 */
export let defaultLayout: Component = () => import('@geonative/ui/components/layout/DefaultLayout.vue');

/**
 * Create a RouteRecord with default values
 */
export function createRoute(route: RouteRecordRaw): RouteRecordRaw {
  // Set default layout if not provided
  if (route.component && !route.components) {
    (route as any).components = { // eslint-disable-line @typescript-eslint/no-explicit-any
      default: route.component
    };
  }
  // Set default layout if not provided
  if (route.components && !route.components.layout) {
    route.components.layout = defaultLayout;
  }
  // Set default meta if not provided
  route.meta = route.meta || {};
  route.meta.menuLabel = route.meta.menuLabel ?? route.name?.toString() ?? '';
  route.meta.showInMenu = route.meta.showInMenu ?? true;
  return route;
}

/**
 * Set the default layout for all routes
 */
export function setDefaultLayout(layout: Component): void {
  defaultLayout = layout;
}
