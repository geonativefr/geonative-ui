<template>
  <ShadcnDrawer
    v-model:open="isOpen"
    :direction="props.direction"
    :dismissible="props.dismissible"
  >
    <ShadcnDrawerTrigger as-child>
      <slot name="trigger" />
    </ShadcnDrawerTrigger>

    <ShadcnDrawerContent class="flex flex-col h-full">
      <ShadcnDrawerHeader class="p-0">
        <ShadcnDrawerTitle class="p-4">
          <slot name="title" />
        </ShadcnDrawerTitle>
        <ShadcnDrawerDescription class="px-4">
          <slot name="description" />
        </ShadcnDrawerDescription>
        <ShadcnSeparator />
      </ShadcnDrawerHeader>

      <div class="px-4">
        <slot />
      </div>

      <ShadcnDrawerFooter class="p-0">
        <ShadcnSeparator />
        <div class="p-4">
          <slot name="footer" />
        </div>
      </ShadcnDrawerFooter>
    </ShadcnDrawerContent>
  </ShadcnDrawer>
</template>

<script setup lang="ts">
import {
  Drawer as ShadcnDrawer,
  DrawerTrigger as ShadcnDrawerTrigger,
  DrawerFooter as ShadcnDrawerFooter,
  DrawerHeader as ShadcnDrawerHeader,
  DrawerContent as ShadcnDrawerContent,
  DrawerTitle as ShadcnDrawerTitle,
  DrawerDescription as ShadcnDrawerDescription,
} from '@geonative/ui/shadcn/ui/drawer';
import { ref, readonly } from 'vue';
import { Separator as ShadcnSeparator } from '@geonative/ui/shadcn/ui/separator';

const props = withDefaults(
  defineProps<{
    direction?: 'top' | 'bottom' | 'left' | 'right';
    dismissible?: boolean;
  }>(),
  {
    direction: 'right',
    dismissible: true,
  }
);

const isOpen = ref(false);

function open() {
  return isOpen.value = true;
}

function close() {
  return isOpen.value = false;
}

defineExpose({ open, close, isOpen : readonly(isOpen) });
</script>
