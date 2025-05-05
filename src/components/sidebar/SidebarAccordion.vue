<template>
  <ShadcnSidebarGroup>
    <ShadcnSidebarGroupLabel>Platform</ShadcnSidebarGroupLabel>
    <ShadcnSidebarMenu>
      <ShadcnCollapsible
        v-for="item in props.items"
        :key="item.title"
        as-child
        :default-open="item.isActive"
        class="group/collapsible"
      >
        <ShadcnSidebarMenuItem>
          <ShadcnCollapsibleTrigger as-child>
            <ShadcnSidebarMenuButton :tooltip="item.title">
              <component :is="item.icon" v-if="item.icon" />
              <span>{{ item.title }}</span>
              <ChevronRight
                class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
              />
            </ShadcnSidebarMenuButton>
          </ShadcnCollapsibleTrigger>
          <ShadcnCollapsibleContent>
            <ShadcnSidebarMenuSub>
              <ShadcnSidebarMenuSubItem v-for="subItem in item.items" :key="subItem.title">
                <ShadcnSidebarMenuSubButton as-child>
                  <a :href="subItem.url">
                    <span>{{ subItem.title }}</span>
                  </a>
                </ShadcnSidebarMenuSubButton>
              </ShadcnSidebarMenuSubItem>
            </ShadcnSidebarMenuSub>
          </ShadcnCollapsibleContent>
        </ShadcnSidebarMenuItem>
      </ShadcnCollapsible>
    </ShadcnSidebarMenu>
  </ShadcnSidebarGroup>
</template>

<script setup lang="ts">
import {
  SidebarGroup as ShadcnSidebarGroup,
  SidebarGroupLabel as ShadcnSidebarGroupLabel,
  SidebarMenu as ShadcnSidebarMenu,
  SidebarMenuItem as ShadcnSidebarMenuItem,
  SidebarMenuButton as ShadcnSidebarMenuButton,
  SidebarMenuSub as ShadcnSidebarMenuSub,
  SidebarMenuSubItem as ShadcnSidebarMenuSubItem,
  SidebarMenuSubButton as ShadcnSidebarMenuSubButton,
} from '@geonative/ui/shadcn/ui/sidebar';
import {
  Collapsible as ShadcnCollapsible,
  CollapsibleTrigger as ShadcnCollapsibleTrigger,
  CollapsibleContent as ShadcnCollapsibleContent,
} from '@geonative/ui/shadcn/ui/collapsible';
import { ChevronRight } from 'lucide-vue-next';
import type { IconProps } from '@geonative/ui/types';

const props = defineProps<{
  items: {
    title: string;
    url: string;
    icon?: IconProps;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}>();
</script>
