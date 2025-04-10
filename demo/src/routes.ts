import type { RouteRecord } from '@geonative/ui/types';
import { createRoute } from '@geonative/ui/helpers';

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
  createRoute({
    path: '/icon',
    name: 'icon',
    component: () => import('@/views/Icon.vue'),
    menuLabel: 'Icon',
  }),
  createRoute({
    path: '/button',
    name: 'button',
    component: () => import('@/views/Button.vue'),
    menuLabel: 'Button',
  }),
  createRoute({
    path: '/dropdown-menu',
    name: 'dropdown-menu',
    component: () => import('@/views/DropdownMenu.vue'),
    menuLabel: 'Dropdown Menu',
  }),
  createRoute({
    path: '/navbar-user',
    name: 'navbar-user',
    component: () => import('@demo/views/NavbarUser.vue'),
    menuLabel: 'Navbar User',
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
