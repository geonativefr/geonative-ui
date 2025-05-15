<template>
  <ShadcnDrawer :direction="props.direction" :should-scale-background="props.scale" :modal="props.modal" >
    <ShadcnDrawerTrigger as-child>
      <slot name="trigger" />
    </ShadcnDrawerTrigger>

    <ShadcnDrawerContent >
      <div class="mx-auto w-full max-w-sm">
        <ShadcnDrawerHeader>
          <slot name="header" />
        </ShadcnDrawerHeader>

        <div class="p-4 pb-0">
          <div class="flex items-center justify-center space-x-2">
            <slot />
          </div>
        </div>

        <ShadcnDrawerFooter>
          <slot name="footer" />
          <DrawerClose>
            <Button class="w-auto">
              Close
            </Button>
          </DrawerClose>
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
  DrawerContent as ShadcnDrawerContent, DrawerClose,
} from '@geonative/ui/shadcn/ui/drawer';
import { Button } from '@geonative/ui/components';

const props = withDefaults(defineProps<{
  direction?: 'top' | 'bottom' | 'left' | 'right' | undefined;
  scale?: boolean
  modal?: boolean
}>(), {
  direction: 'right',
  scale: true,
  modal: true,
});

</script>
