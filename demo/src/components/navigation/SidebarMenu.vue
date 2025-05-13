<template>
  <SidebarGroup>
    <SidebarGroupLabel>Application</SidebarGroupLabel>
    <SidebarGroupContent>
      <SidebarMenu>
        <SidebarMenuItem v-for="(route, index) in menuRoutes" :key="index">
          <SidebarMenuButton asChild>
            <router-link :to="{ name: route.name }">
              <span>{{ route.meta?.menuLabel }}</span>
            </router-link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroupContent>
  </SidebarGroup>
</template>

<script setup lang="ts">
import routes from '@/routes.ts';
import { computed } from 'vue';
import { type RouteRecordRaw, useRoute } from 'vue-router';
import {
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarGroupContent,
  SidebarGroupLabel, SidebarMenuButton,
  SidebarMenuItem,
} from '@geonative/ui/shadcn/ui/sidebar';

const route = useRoute();
const menuRoutes = routes.filter((route) => route.meta?.showInMenu);

// Use computed property to track the current route dynamically
const currentRoute = computed(() => {
  return routes.find((r) => r.name === route.name);
});

const isActive = (route: RouteRecordRaw) => {
  return currentRoute.value?.name === route.name;
};
</script>
