<template>
  <ShadcnAccordion :type="props.multiple ? 'multiple' : 'single'" class="w-full" :collapsible="props.collapsible">
    <ShadcnAccordionItem v-for="(item, index) in props.items" :key="index" :value="item.label">
      <ShadcnAccordionTrigger class="flex items-center">
        <Icon v-if="item.iconProps" v-bind="item.iconProps" />
        {{ item.label }}
      </ShadcnAccordionTrigger>
      <ShadcnAccordionContent>
        <div>
          {{ item.content }}
        </div>
        <Accordion v-if="item.items" :items="item.items" :multiple="props.multiple" :collapsible="props.collapsible" />
      </ShadcnAccordionContent>
    </ShadcnAccordionItem>
  </ShadcnAccordion>
</template>

<script setup lang="ts">
import {
  Accordion as ShadcnAccordion,
  AccordionItem as ShadcnAccordionItem,
  AccordionTrigger as ShadcnAccordionTrigger,
  AccordionContent as ShadcnAccordionContent,
} from '@geonative/ui/shadcn/ui/accordion';
import type { AccordionProps } from '@geonative/ui/types/accordion';
import { Icon } from '@geonative/ui/components';

const props = withDefaults(defineProps<AccordionProps>(), {
  multiple: false,
  collapsible: false,
});
</script>
