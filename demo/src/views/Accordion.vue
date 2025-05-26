<template>
  <div class="p-5">
    <div>
      <h1 class="mt-10 mb-3">Accordion Single :</h1>
      <Accordion>
        <AccordionItem>
          <template #title>
            <div>
              <Icon name="AlertCircle" source="lucide" class="text-pink-700" />
            </div>
          </template>

          <p>this is an alert icon</p>
        </AccordionItem>

        <AccordionItem>
          <template #title>
            <div>
              <Icon name="antenna" source="svg" class="size-7 fill-blue-500" />
            </div>
          </template>

          <span>this is an antenna icon</span>
        </AccordionItem>

        <AccordionItem>
          <template #title>
            <span>Click to show a Button</span>
          </template>

          <Button class="bg-green-500">Button</Button>
        </AccordionItem>
      </Accordion>
    </div>

    <div>
      <h1 class="mt-10 mb-3">Accordion Single with collapsible :</h1>
      <Accordion :collapsible="true">
        <AccordionItem>
          <template #title>
            <span>Accordion 1</span>
          </template>

          <p>Content 1</p>
        </AccordionItem>

        <AccordionItem>
          <template #title>
            <span>Accordion 2</span>
          </template>

          <p>Content 2</p>
        </AccordionItem>

        <AccordionItem>
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
        <AccordionItem>
          <template #title>
            <span>Accordion 1</span>
          </template>

          <p>Content 1</p>
        </AccordionItem>

        <AccordionItem>
          <template #title>
            <span>Accordion 2</span>
          </template>

          <p>Content 2</p>
        </AccordionItem>

        <AccordionItem>
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
import { Accordion, AccordionItem, Icon, Button } from '@geonative/ui/components';
</script>
