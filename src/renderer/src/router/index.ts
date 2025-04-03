import { createRouter, createWebHashHistory } from 'vue-router';
import type { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    redirect: '/app',
  },
  {
    path: '/app',
    name: 'app',
    component: () => import('@/App.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export { router, routes };
