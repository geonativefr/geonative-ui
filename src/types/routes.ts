import type { RouteRecordRaw } from 'vue-router';

export type RouteRecord = RouteRecordRaw & {
  showInMenu?: boolean;
  menuLabel?: string;
};
