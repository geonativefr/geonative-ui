<template>
  <div class="flex flex-col items-center justify-center min-h-screen p-5 space-y-10">
    <div class="w-full">
      <Card>
        <template #title>
          <span>This is a title</span>
        </template>

        <template #description>
          <span>This is a description</span>
        </template>

        <span>This is a Content</span>

        <template #footer>
          <span>This a footer</span>
        </template>
      </Card>
    </div>

    <div>
      <Card class="w-[30rem]">
        <template #title>
          <span>This is a title</span>
        </template>

        <template #description>
          <span>This is a description</span>
        </template>

        <span>This is a Content</span>

        <template #footer>
          <span>This a footer</span>
        </template>
      </Card>
    </div>

    <div>
    <Card class="w-[25rem] h-[50rem]">
      <template #title>
        <span>This is a title</span>
      </template>

      <template #description>
        <span>This is a description</span>
      </template>

      <span>This is a Content</span>

      <template #footer>
        <span>This a footer</span>
      </template>
    </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Card } from '@geonative/ui/components';
</script>
