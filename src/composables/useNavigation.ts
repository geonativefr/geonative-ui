import { useRoute } from 'vue-router';
import type { RouteRecord } from '@geonative/ui/types';
import { AppLayout as DefaultLayout } from '@geonative/ui/components';
import routes from '@/routes';
import { type Component, computed, ref } from 'vue';

const route = useRoute();
const currentRoute = computed<RouteRecord>(() => routes.find((r) => r.name === route.name) as RouteRecord);
const defaultLayout = ref<Component>(DefaultLayout);

export function useNavigation() {
  /**
   * Create a RouteRecord with default values
   */
  function createRoute(route: RouteRecord): RouteRecord {
    return {
      showInMenu: true, // Default value
      menuLabel: route.name?.toString() || '', // Default label from name
      layout: route.layout || defaultLayout, // Default layout
      ...route, // This allows overriding the default
    };
  }

  /**
   * Set the default layout for all routes
   */
  function setDefaultLayout(layout: Component) {
    defaultLayout.value = layout;
  }

  return {
    setDefaultLayout,
    createRoute,
    currentRoute,
  };
}
