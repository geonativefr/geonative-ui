import type { RouteRecord, RouteRecordCreator } from '@geonative/ui/types';
import type { Component } from 'vue';
import { AppLayout as DefaultLayout } from '@geonative/ui/components';
import { ref } from 'vue';

/**
 * Default layout for all routes
 */
export const defaultLayout = ref<Component>(DefaultLayout);

/**
 * Create a RouteRecord with default values
 */
export function createRoute(route: RouteRecordCreator): RouteRecord {
  return {
    showInMenu: route.showInMenu ?? true, // Default value
    menuLabel:  route.menuLabel ?? route.name?.toString() ?? '', // Default label from name
    layout: route.layout ?? defaultLayout, // Default layout
    ...route, // This allows overriding the default
  };
}

/**
 * Set the default layout for all routes
 */
export function setDefaultLayout(layout: Component) {
  defaultLayout.value = layout;
}
