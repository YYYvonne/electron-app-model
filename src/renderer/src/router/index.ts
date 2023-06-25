// @ts-nocheck
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import type { RouteConfigs } from '@renderer/types';
import { t } from '@renderer/lang/zh';
const routes = <RouteConfigs>[];
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export { router, routes };
