<template>
  <ShadcnDrawer :direction="props.direction" :should-scale-background="props.scale" :modal="props.modal" :nested="true">
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

        <div class="flex-1 flex items-center justify-center">
          <slot />
        </div>

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

const props = withDefaults(
  defineProps<{
    direction?: 'top' | 'bottom' | 'left' | 'right' | undefined;
    scale?: boolean;
    modal?: boolean;
  }>(),
  {
    direction: 'right',
    scale: true,
    modal: true,
  }
);
</script>
