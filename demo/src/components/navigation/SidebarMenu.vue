<template>
  <ShadcnSidebarGroup>
    <Accordion type="single" collapsible defaultValue="item-1">
      <AccordionItem value="item-1">
        <template #title> Application </template>

        <ShadcnSidebarGroupContent>
          <ShadcnSidebarMenu>
            <ShadcnSidebarMenuItem v-for="(route, index) in menuRoutes" :key="index">
              <ShadcnSidebarMenuButton asChild>
                <router-link :to="{ name: route.name }">
                  <span>{{ route.meta?.menuLabel }}</span>
                </router-link>
              </ShadcnSidebarMenuButton>
            </ShadcnSidebarMenuItem>
          </ShadcnSidebarMenu>
        </ShadcnSidebarGroupContent>
      </AccordionItem>
    </Accordion>
  </ShadcnSidebarGroup>
</template>

<script setup lang="ts">
import routes from '@/routes.ts';
import { computed } from 'vue';
import { type RouteRecordRaw, useRoute } from 'vue-router';
import {
  SidebarGroup as ShadcnSidebarGroup,
  SidebarMenu as ShadcnSidebarMenu,
  SidebarGroupContent as ShadcnSidebarGroupContent,
  SidebarGroupLabel as ShadcnSidebarGroupLabel,
  SidebarMenuButton as ShadcnSidebarMenuButton,
  SidebarMenuItem as ShadcnSidebarMenuItem,
} from '@geonative/ui/shadcn/ui/sidebar';
import { AccordionItem, Accordion } from '@geonative/ui/components';

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
