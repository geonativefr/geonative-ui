<template>
  <ShadcnDropdownMenu>
    <ShadcnDropdownMenuTrigger as-child>
      <Button
        size="lg"
        class="hover:bg-gray-100 text-black rounded-lg px-2 py-2"
      >
        <div class="flex items-center gap-2">
          <Avatar v-bind="avatarProps" />
          <span class="flex flex-col text-left text-sm">
            <span class="font-semibold">{{ user.name }}</span>
            <span class="text-xs">{{ user.email }}</span>
          </span>
          <ChevronsUpDown class="size-5 ml-4" />
        </div>
      </Button>
    </ShadcnDropdownMenuTrigger>
    <ShadcnDropdownMenuContent class="w-full min-w-56 rounded-lg" :side="'right'" align="end" :side-offset="4">
      <ShadcnDropdownMenuLabel class="p-0">
        <div class="flex items-center px-1 py-1.5 gap-2">
          <Avatar v-bind="avatarProps" />
          <div class="grid">
            <span class="font-semibold">{{ user.name }}</span>
            <span class="text-xs">{{ user.email }}</span>
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
import Button from '@geonative/ui/components/button/Button.vue';
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
