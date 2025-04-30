import type { RouteRecordRaw } from 'vue-router';
import { setDefaultLayout, createRoute } from '@geonative/ui/helpers';
import { AppLayout } from '@/components';

setDefaultLayout(AppLayout);
const routes: RouteRecordRaw[] = [
  createRoute({
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
    meta: {
      menuLabel: 'Home',
    },
  }),
  createRoute({
    path: '/action',
    name: 'action',
    component: () => import('@/views/Action.vue'),
    meta: {
      menuLabel: 'Action',
    },
  }),
  createRoute({
    path: '/avatar',
    name: 'avatar',
    component: () => import('@/views/Avatar.vue'),
    meta: {
      menuLabel: 'Avatar',
    },
  }),
  createRoute({
    path: '/breadcrumb',
    name: 'breadcrumb',
    component: () => import('@/views/Breadcrumb.vue'),
    meta: {
      menuLabel: 'Breadcrumb',
    },
  }),
  createRoute({
    path: '/loader',
    name: 'loader',
    component: () => import('@/views/Loader.vue'),
    meta: {
      menuLabel: 'Loader',
    },
  }),
  createRoute({
    path: '/icon',
    name: 'icon',
    component: () => import('@/views/Icon.vue'),
    meta: {
      menuLabel: 'Icon',
    },
  }),
  createRoute({
    path: '/button',
    name: 'button',
    component: () => import('@/views/Button.vue'),
    meta: {
      menuLabel: 'Button',
    },
  }),
  createRoute({
    path: '/dropdown-menu',
    name: 'dropdown-menu',
    component: () => import('@/views/DropdownMenu.vue'),
    meta: {
      menuLabel: 'Dropdown Menu',
    },
  }),
  createRoute({
    path: '/navbar-dropdown',
    name: 'navbar-dropdown',
    component: () => import('@/views/NavbarDropdown.vue'),
    meta: {
      menuLabel: 'Navbar Dropdown',
    },
  }),
  createRoute({
    path: '/themes',
    name: 'themes',
    component: () => import('@/views/Themes.vue'),
    meta: {
      menuLabel: 'Themes',
    },
  }),
  createRoute({
      path: '/dropdown-switcher',
      name: 'account-switcher',
      component: () => import('@/views/DropdownSwitcher.vue'),
      meta: {
        menuLabel: 'Account Switcher',
      },
}),
  createRoute({
    path: '/toaster',
    name: 'toaster',
    component: () => import('@/views/Toaster.vue'),
    meta: {
      menuLabel: 'Toaster',
    },
  }),
  createRoute({
    path: '/accordion',
    name: 'accordion',
    component: () => import('@/views/Accordion.vue'),
    meta: {
      menuLabel: 'Accordion',
    },
    path: '/account-switcher',
    name: 'account-switcher',
    component: () => import('@/views/AccountSwitcher.vue'),
    meta: {
      menuLabel: 'Account Switcher',
    },
  }),
  // Catch all unmatched routes
  createRoute({
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/NotFound.vue'),
    meta: {
      showInMenu: false,
    },
  }),
];

export default routes;
