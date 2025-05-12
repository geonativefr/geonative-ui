<template>
  <div class="p-5">
    <div>
      <h1 class="mb-3">Single Accordion :</h1>
      <Accordion :items="items" />
    </div>
    <div>
      <h1 class="mt-10 mb-3">Single Accordion with Collapsible :</h1>
      <Accordion :items="items" :collapsible="true" />
    </div>
    <div>
      <h1 class="mt-10 mb-3">Multiple Accordion :</h1>
      <Accordion :items="items" :multiple="true" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Accordion } from '@geonative/ui/components';
import type { AccordionItem } from '@geonative/ui/types/accordion';

const items: AccordionItem[] = [
  {
    label: 'Item 1',
    content: 'Content for item 1',
    iconProps: { name: 'star', source: 'heroicons', type: 'solid', class: 'h-4 w-4' },
    items: [
      {
        label: 'Item 1.1',
        content: 'Content for item 1.1',
        iconProps: { name: 'bolt', source: 'heroicons', type: 'outline', class: 'h-4 w-4' },
      },
      {
        label: 'Item 1.2',
        content: 'Content for item 1.2',
        iconProps: { name: 'bolt', source: 'heroicons', type: 'outline', class: 'h-4 w-4' },
      },
    ],
  },
  {
    label: 'Item 2',
    content: 'Content for item 2',
    iconProps: { name: 'star', source: 'heroicons', type: 'solid', class: 'h-4 w-4' },
  },
  {
    label: 'Item 3',
    content: 'Content for item 3',
    iconProps: { name: 'star', source: 'heroicons', type: 'solid', class: 'h-4 w-4' },
  },
];
</script>
