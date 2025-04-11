import type { RouteRecord } from '@/types';
import { createRoute } from '@/helpers';

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
  createRoute({
    path: '/icon',
    name: 'icon',
    component: () => import('@demo/views/Icon.vue'),
    menuLabel: 'Icon',
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
