<template>
  <div class="flex flex-col gap-4 align-bottom">
    <a class="underline text-foreground" href="#" @click="emit('click', props.label)">{{ ucfirst(props.label) }}</a>
    <ul v-if="props.config" class="flex flex-col gap-1">
      <li v-for="(value, key) in props.config" :key="key">
        <span class="font-bold">{{ key }}</span>: <span>{{ value }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { ThemeConfig } from '@geonative/ui/types';
import { ucfirst } from '@geonative/ui/helpers';
import { defineEmits, defineProps, withDefaults } from 'vue';

const emit = defineEmits(['click']);
const props = withDefaults(
  defineProps<{
    label: string,
    config?: ThemeConfig | null,
  }>(), {
    config: null,
  }
);



</script>
