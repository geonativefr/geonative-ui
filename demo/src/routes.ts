import type { RouteRecord } from '@/types/routes';
import { createRoute } from '@/types/routes';

const routes: Array<RouteRecord> = [
  createRoute({
    path: '/',
    name: 'home',
    component: () => import('@demo/views/Home.vue'),
    menuLabel: 'Home',
  }),
  createRoute({
    path: '/breadcrumb',
    name: 'breadcrumb',
    component: () => import('@demo/views/Breadcrumb.vue'),
    menuLabel: 'Breadcrumb',
  }),
  // Catch all unmatched routes
  createRoute({
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@demo/views/NotFound.vue'),
    showInMenu: false,
  }),
];

export default routes;
