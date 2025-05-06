import { useRoute } from 'vue-router';
import type { RouteRecord } from '@geonative/ui/types';
import routes from '@/routes';

export function useCurrentRoute() : RouteRecord | null {
  const route = useRoute();
  return routes.find((r) => r.name === route.name) ?? null;
}
