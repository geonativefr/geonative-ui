<template>
  <ShadcnDropdownMenu>
    <ShadcnDropdownMenuTrigger v-if="props.name">
      <Button>{{ props.name }}</Button>
    </ShadcnDropdownMenuTrigger>
    <ShadcnDropdownMenuContent
      class="w-full min-w-56 rounded-lg"
      :side="safePosition"
      :align="safeAlign"
      :side-offset="4"
    >
      <div v-if="props.label != null">
        <ShadcnDropdownMenuLabel class="text-center">{{ props.label }}</ShadcnDropdownMenuLabel>
        <ShadcnDropdownMenuSeparator />
      </div>
      <div v-for="(section, index) in props.sections" :key="index">
        <DropdownMenuSection :section="section" :show-separator="index > 0" />
      </div>
    </ShadcnDropdownMenuContent>
  </ShadcnDropdownMenu>
</template>

<script setup lang="ts">
import {
  DropdownMenu as ShadcnDropdownMenu,
  DropdownMenuContent as ShadcnDropdownMenuContent,
  DropdownMenuLabel as ShadcnDropdownMenuLabel,
  DropdownMenuTrigger as ShadcnDropdownMenuTrigger,
  DropdownMenuSeparator as ShadcnDropdownMenuSeparator,
} from '@/shadcn/ui/dropdown-menu';
import { Button } from '@/shadcn/ui/button';
import DropdownMenuSection from '@/components/dropdown-menu/DropdownMenuSection.vue';
import type { DropdownMenuSection as DropdownMenuSectionType } from '@/types/dropdown-menu.ts';
import { computed, type PropType } from 'vue';

const props = defineProps({
  sections: {
    type: Array as () => DropdownMenuSectionType[],
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: false,
  },
  position: {
    type: String as PropType<'right' | 'top' | 'bottom' | 'left'>,
    required: false,
    default: 'right',
    validator: (value: string) => {
      return ['right', 'top', 'bottom', 'left'].includes(value);
    },
  },
  align: {
    type: String as PropType<'start' | 'center' | 'end'>,
    required: false,
    default: 'start',
    validator: (value: string) => {
      return ['start', 'center', 'end'].includes(value);
    },
  },
});

// Manage default values for position and align props if wrong values are passed
const safePosition = computed(() => {
  return ['right', 'top', 'bottom', 'left'].includes(props.position || '') ? props.position : 'right';
});
const safeAlign = computed(() => {
  return ['start', 'center', 'end'].includes(props.align || '') ? props.align : 'start';
});
</script>
