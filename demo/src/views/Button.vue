<template>
  <div class="p-5 text-center">
    <Button
      size="sm"
      @click="isClickedButton = !isClickedButton"
    >Default SM</Button>
    <Button
      @click="isClickedButton = !isClickedButton"
    >Default</Button>
    <Button
      size="lg"
      @click="isClickedButton = !isClickedButton"
    >Default LG</Button>
    <Button
      class="text-blue-500 bg-blue-100 rounded-full"
      :disabled="false"
      @click="isClickedButton = !isClickedButton"
    >Custom</Button>
    <Button
      :disabled="true"
      @click="isClickedButton = !isClickedButton"
    >MD Disable</Button>
    <Button
      :loading="true"
      loading-text="Loading..."
      @click="isClickedButton = !isClickedButton"
    >Loading...</Button>
    <Button
      :loading="true"
      size="sm"
      @click="isClickedButton = !isClickedButton"
    >Loading...</Button>
    <p v-if="isClickedButton" class="mt-3 text-green-500">Button clicked !</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Button from '@geonative/ui/components/button/Button.vue';

const isClickedButton = ref(false);
</script>
