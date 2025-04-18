<template>
  <div class="flex flex-col gap-4 p-5">
    <div>
      <Button
        size="sm"
        @click="isClickedButton = !isClickedButton"
      >Default SM</Button>
    </div>
    <div>
      <Button
        @click="isClickedButton = !isClickedButton"
      >Default</Button>
    </div>
    <div>
      <Button
        size="lg"
        @click="isClickedButton = !isClickedButton"
      >Default LG</Button>
    </div>
    <div>
      <Button
        class="text-blue-500 bg-blue-100 rounded-full"
        :disabled="false"
        @click="isClickedButton = !isClickedButton"
      >Custom</Button>
    </div>
    <div>
      <Button
        :disabled="true"
        @click="isClickedButton = !isClickedButton"
      >MD Disable</Button>
    </div>
    <div>
      <Button
        :loading="true"
        loading-text="Loading..."
        @click="isClickedButton = !isClickedButton"
      >Loading...</Button>
    </div>
    <div>
      <Button
        :loading="true"
        size="sm"
        @click="isClickedButton = !isClickedButton"
      >Loading...</Button>
      <p v-if="isClickedButton" class="mt-3 text-green-500">Button clicked !</p>
    </div>
    <div>
      <Button
        :loading="true"
        loading-text="Loading..."
        @click="isClickedButton = !isClickedButton"
      >Loading...</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Button from '@geonative/ui/components/button/Button.vue';

const isClickedButton = ref(false);
</script>
