import type { RouteRecord } from '@/types/routes';
import { createRoute } from '@/types/routes';

const routes: Array<RouteRecord> = [
  createRoute({
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
    showInMenu: false,
  }),
  createRoute({
    path: '/breadcrumb',
    name: 'breadcrumb',
    component: () => import('@/views/Breadcrumb.vue'),
    menuLabel: 'Breadcrumb',
  }),
  // Catch all unmatched routes
  createRoute({
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/NotFound.vue'),
    showInMenu: false,
  }),
];

export default routes;
