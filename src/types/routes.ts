import type { RouteRecordRaw } from 'vue-router';
import type { Component } from 'vue';

export type RouteRecord = RouteRecordRaw & {
  showInMenu?: boolean;
  menuLabel?: string;
  layout?: Component;
};
