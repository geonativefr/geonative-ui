import type { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/breadcrumb',
    name: 'breadcrumb',
    component: () => import('@/views/Breadcrumb.vue'),
  },
  // Catch all unmatched routes
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/NotFound.vue'),
  },
];

export default routes;
