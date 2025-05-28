<template>
  <ShadcnDrawer
    v-model:open="isOpen"
    :direction="props.direction"
    :dismissible="props.dismissible"
  >
    <ShadcnDrawerTrigger as-child>
      <slot name="trigger" />
    </ShadcnDrawerTrigger>

    <ShadcnDrawerContent>
      <div class="flex flex-col h-full">
        <ShadcnDrawerHeader>
          <ShadcnDrawerTitle>
            <slot name="title" />
          </ShadcnDrawerTitle>
          <ShadcnDrawerDescription>
            <slot name="description" />
          </ShadcnDrawerDescription>
        </ShadcnDrawerHeader>

        <ShadcnSeparator />

        <slot />

        <ShadcnSeparator />

        <ShadcnDrawerFooter>
          <slot name="footer" />
        </ShadcnDrawerFooter>
      </div>
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
