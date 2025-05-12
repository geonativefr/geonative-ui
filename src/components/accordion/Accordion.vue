<template>
  <ShadcnAccordion :type="props.multiple ? 'multiple' : 'single'" class="w-full" :collapsible="props.collapsible">
    <slot />
  </ShadcnAccordion>
</template>

<script setup lang="ts">
import { Accordion as ShadcnAccordion } from '@geonative/ui/shadcn/ui/accordion';

const props = withDefaults(defineProps<{
  multiple?: boolean;
  collapsible?: boolean;
}>(), {
  multiple: false,
  collapsible: false,
});
</script>
