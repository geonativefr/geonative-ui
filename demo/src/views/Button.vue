<template>
  <div class="p-5">
    <h1 class="mb-3">BUTTON :</h1>
    <Button :button="buttonConfig" class="bg-blue-500 text-white rounded-lg hover:bg-blue-600" />
    <p v-if="clickedMessage" class="mt-3 text-green-500">{{ clickedMessage }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Button from '@/components/button/Button.vue';
import type { Button as ButtonType } from '@/types/button';

const clickedMessage = ref('');
const buttonConfig: ButtonType = {
  label: 'Click me',
  size: 'lg',
  onClick: () => {
    clickedMessage.value = 'Button clicked';
  },
  disabled: false,
};
</script>