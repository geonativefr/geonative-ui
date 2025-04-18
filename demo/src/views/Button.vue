<template>
  <div class="p-5 text-center">
    <Button @click="isClickedButton = !isClickedButton" size="sm">Default SM</Button>
    <Button @click="isClickedButton = !isClickedButton">Default</Button>
    <Button @click="isClickedButton = !isClickedButton" size="lg">Default LG</Button>
    <Button
      class="text-blue-500 bg-blue-100 rounded-full"
      :disabled="false"
      @click="isClickedButton = !isClickedButton"
    >
      Custom
    </Button>
    <p v-if="isClickedButton" class="mt-3 text-green-500">Button clicked !</p>
    <Button :disabled="true" @click="isClickedButton = !isClickedButton"> MD Disable </Button>
    <Button
      class="bg-blue-500"
      :loading="true"
      loading-text="Loading text longer thant btn text..."
      @click="isClickedButton = !isClickedButton"
      >SM loading...</Button
    >
    <Button class="bg-blue-500" :loading="true" size="sm" @click="isClickedButton = !isClickedButton"
      >SM loading...</Button
    >
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Button from '@geonative/ui/components/button/Button.vue';

const isClickedButton = ref(false);
</script>
