<template>
  <div class="p-5">
    <div>
      <h1 class="mt-10 mb-3">Accordion Single :</h1>
      <Accordion>
        <AccordionItem value="item-1">
          <template #title>
            <span>Accordion 1</span>
          </template>

          <p>Content 1</p>
        </AccordionItem>

        <AccordionItem value="item-2">
          <template #title>
            <span>Accordion 2</span>
          </template>

          <p>Content 2</p>
        </AccordionItem>

        <AccordionItem value="item-3">
          <template #title>
            <span>Accordion 3</span>
          </template>

            <p>Content 3</p>
        </AccordionItem>
      </Accordion>
    </div>

    <div>
      <h1 class="mt-10 mb-3">Accordion Single with collapsible :</h1>
      <Accordion :collapsible="true">
        <AccordionItem value="item-1">
          <template #title>
            <span>Accordion 1</span>
          </template>

          <p>Content 1</p>
        </AccordionItem>

        <AccordionItem value="item-2">
          <template #title>
            <span>Accordion 2</span>
          </template>

          <p>Content 2</p>
        </AccordionItem>

        <AccordionItem value="item-3">
          <template #title>
            <span>Accordion 3</span>
          </template>

            <p>Content 3</p>
        </AccordionItem>
      </Accordion>
    </div>

    <div>
      <h1 class="mt-10 mb-3">Accordion Multiple :</h1>
      <Accordion :multiple="true">
        <AccordionItem value="item-1">
          <template #title>
            <span>Accordion 1</span>
          </template>

          <p>Content 1</p>
        </AccordionItem>

        <AccordionItem value="item-2">
          <template #title>
            <span>Accordion 2</span>
          </template>

           <p>Content 2</p>
        </AccordionItem>

        <AccordionItem value="item-3">
          <template #title>
            <span>Accordion 3</span>
          </template>

            <p>Content 3</p>
        </AccordionItem>
      </Accordion>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Accordion, AccordionItem } from '@geonative/ui/components';
</script>
