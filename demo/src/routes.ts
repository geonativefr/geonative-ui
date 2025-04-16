import type { RouteRecord } from '@ui/types';
import { createRoute } from '@ui/helpers';

const routes: Array<RouteRecord> = [
  createRoute({
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
    menuLabel: 'Home',
  }),
  createRoute({
    path: '/avatar',
    name: 'avatar',
    component: () => import('@/views/Avatar.vue'),
    menuLabel: 'Avatar',
  }),
  createRoute({
    path: '/breadcrumb',
    name: 'breadcrumb',
    component: () => import('@/views/Breadcrumb.vue'),
    menuLabel: 'Breadcrumb',
  }),
  createRoute({
    path: '/loader',
    name: 'loader',
    component: () => import('@/views/Loader.vue'),
    menuLabel: 'Loader',
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
