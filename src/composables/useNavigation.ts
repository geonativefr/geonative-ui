import { useRoute } from 'vue-router';
import type { RouteRecord } from '@geonative/ui/types';
import { AppLayout as DefaultLayout } from '@geonative/ui/components';
import routes from '@/routes';
import { ref, watch } from 'vue';

const route = useRoute();
const currentRoute = ref<RouteRecord>(() => routes.find((r) => r.name === route.name) as RouteRecord);

export function useNavigation() {

  /**
   * Create a RouteRecord with default values
   */
  function createRoute(route: RouteRecord): RouteRecord {
    return {
      showInMenu: true, // Default value
      menuLabel: route.name?.toString() || '', // Default label from name
      layout: route.layout || DefaultLayout, // Default layout
      ...route, // This allows overriding the default
    };
  }

  /**
   * Watch for route changes and update currentRoute
   */
  watch(route, () => {
    currentRoute.value = routes.find((r) => r.name === route.name) as RouteRecord;
    return currentRoute;
  });

  return {
    createRoute,
    currentRoute,
  }
}