import type { RouteRecord } from '@geonative/ui/types';
import { useNavigation } from '@geonative/ui/composables';

const { createRoute } = useNavigation();

const routes: Array<RouteRecord> = [
  createRoute({
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
    menuLabel: 'Home',
  }),
  createRoute({
    path: '/action',
    name: 'action',
    component: () => import('@/views/Action.vue'),
    menuLabel: 'Action',
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
    path: '/navbar-dropdown',
    name: 'navbar-dropdown',
    component: () => import('@/views/NavbarDropdown.vue'),
    menuLabel: 'Navbar Dropdown',
  }),
  createRoute({
    path: '/themes',
    name: 'themes',
    component: () => import('@/views/Themes.vue'),
    menuLabel: 'Themes',
  }),
  createRoute({
    path: '/toaster',
    name: 'toaster',
    component: () => import('@/views/Toaster.vue'),
    menuLabel: 'Toaster',
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
