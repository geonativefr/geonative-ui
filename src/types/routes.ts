import type { RouteRecordRaw } from 'vue-router';
import type { Component } from 'vue';

export type RouteRecordExtension = {
  showInMenu: boolean;
  menuLabel: string;
  layout: Component;
};
export type RouteRecord = RouteRecordRaw & RouteRecordExtension;
export type RouteRecordCreator = RouteRecordRaw & Partial<RouteRecordExtension>;
