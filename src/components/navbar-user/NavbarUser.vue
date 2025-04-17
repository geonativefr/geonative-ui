<template>
  <ShadcnDropdownMenu>
    <ShadcnDropdownMenuTrigger as-child>
      <button
        size="lg"
        class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground flex items-center gap-4 p-2 rounded-lg hover:bg-gray-100 transition-colors"
      >
        <Avatar v-bind="avatarProps" />
        <span class="grid flex-1 text-left text-sm leading-tight">
          <span class="truncate font-semibold">{{ user.name }}</span>
          <span class="truncate text-xs">{{ user.email }}</span>
        </span>
        <ChevronsUpDown class="ml-7 size-5" />
      </button>
    </ShadcnDropdownMenuTrigger>
    <ShadcnDropdownMenuContent class="w-full min-w-56 rounded-lg" :side="'right'" align="end" :side-offset="4">
      <ShadcnDropdownMenuLabel class="p-0 font-normal">
        <div class="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
          <Avatar v-bind="avatarProps" />
          <div class="grid flex-1 text-left text-sm leading-tight">
            <span class="truncate font-semibold">{{ user.name }}</span>
            <span class="truncate text-xs">{{ user.email }}</span>
          </div>
        </div>
      </ShadcnDropdownMenuLabel>
      <ShadcnDropdownMenuSeparator />

      <div v-for="(section, index) in props.dropdown.sections" :key="index">
        <DropdownMenuSection :section="section" :showSeparator="false" />
        <ShadcnDropdownMenuSeparator v-if="index < props.dropdown.sections.length - 1" />
      </div>
    </ShadcnDropdownMenuContent>
  </ShadcnDropdownMenu>
</template>

<script setup lang="ts">
import { ChevronsUpDown } from 'lucide-vue-next';
import { computed } from 'vue';
import Avatar from '@geonative/ui/components/avatar/Avatar.vue';
import DropdownMenuSection from '@geonative/ui/components/dropdown-menu/DropdownMenuSection.vue';
import {
  DropdownMenuLabel as ShadcnDropdownMenuLabel,
  DropdownMenu as ShadcnDropdownMenu,
  DropdownMenuContent as ShadcnDropdownMenuContent,
  DropdownMenuTrigger as ShadcnDropdownMenuTrigger,
  DropdownMenuSeparator as ShadcnDropdownMenuSeparator,
} from '@geonative/ui/shadcn/ui/dropdown-menu';
import type { DropdownMenuSection as DropdownMenuSectionType } from '@geonative/ui/types/dropdown-menu';


const props = defineProps<{
  user: {
    name: string;
    email: string;
    avatar: string;
  };
  dropdown: {
    sections: DropdownMenuSectionType[];
  };
}>();

const avatarProps = computed(() => ({
  url: props.user.avatar,
  bgColor: '#ff00ff',
  textColor: '#000000',
  initials: props.user.name.slice(0, 2),
  isSquare: true,
}));
</script>
