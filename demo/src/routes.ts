import type { RouteRecord } from '@/types/routes';
import { createRoute } from '@/helpers/routes';

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
  createRoute({
    path: '/avatar',
    name: 'avatar',
    component: () => import('@demo/views/Avatar.vue'),
    menuLabel: 'Avatar',
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
