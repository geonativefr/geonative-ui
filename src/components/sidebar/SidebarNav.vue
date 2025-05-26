<template>
  <ShadcnSidebarGroup>
    <Accordion type="single" collapsible defaultValue="item-1">
      <AccordionItem value="item-1">
        <template #title>{{ props.title }}</template>
        <ShadcnSidebarGroupContent>
          <ShadcnSidebarMenu>
            <ShadcnSidebarMenuItem v-for="(route, index) in props.menu" :key="route.name || index">
              <ShadcnSidebarMenuButton asChild>
                <Action :action-click="route.path">
                  <span>{{ route.meta?.menuLabel }}</span>
                </Action>
              </ShadcnSidebarMenuButton>
            </ShadcnSidebarMenuItem>
          </ShadcnSidebarMenu>
        </ShadcnSidebarGroupContent>
      </AccordionItem>
    </Accordion>
  </ShadcnSidebarGroup>
</template>

<script setup lang="ts">
import { Accordion, AccordionItem, Action } from '@geonative/ui/components';
import {
  SidebarGroup as ShadcnSidebarGroup,
  SidebarMenu as ShadcnSidebarMenu,
  SidebarGroupContent as ShadcnSidebarGroupContent,
  SidebarMenuButton as ShadcnSidebarMenuButton,
  SidebarMenuItem as ShadcnSidebarMenuItem,
} from '@geonative/ui/shadcn/ui/sidebar';
import type { RouteRecordRaw } from 'vue-router';

const props = defineProps<{
  title?: string;
  menu: RouteRecordRaw[];
}>();
</script>
