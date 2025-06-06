<template>
  <div class="p-5">
    <CardList>

      <Card v-for="i in 22" :key="i" :class="{ 'col-span-2' : i % 5 === 0, 'row-span-2' : i % 10 === 0 }">
        <template #title>
          <span>This is a title {{ i }}</span>
        </template>

        <template #description>
          <span>This is a description {{ i }}</span>
        </template>

        <span>This is a Content {{ i }}</span>

        <template #footer>
          <span>This a footer {{ i }}</span>
        </template>
      </Card>

    </CardList>
  </div>
</template>

<script setup lang="ts">
import { CardList, Card } from '@geonative/ui/components';
</script>
