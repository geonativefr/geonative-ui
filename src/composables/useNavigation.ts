import { useRoute } from 'vue-router';
import type { RouteRecord } from '@geonative/ui/types';
import { AppLayout as DefaultLayout } from '@geonative/ui/components';
import routes from '@/routes';
import { ref, watch } from 'vue';
import { type Component } from 'vue';

const route = useRoute();
const currentRoute = ref<RouteRecord>(() => routes.find((r) => r.name === route.name) as RouteRecord);
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

  /**
   * Watch for route changes and update currentRoute
   */
  watch(route, () => {
    currentRoute.value = routes.find((r) => r.name === route.name) as RouteRecord;
    return currentRoute;
  });

  return {
    setDefaultLayout,
    createRoute,
    currentRoute,
  };
}
