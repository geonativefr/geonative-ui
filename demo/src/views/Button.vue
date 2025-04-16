<template>
  <div class="p-5">
    <h1 class="mb-3">Button :</h1>
    <Button
      class="text-blue-500 bg-blue-100 hover:bg-blue-200 rounded-full px-4 py-2 shadow-md"
      :disabled="false"
      @click="isClickedButton = !isClickedButton"
      size="lg"
    >
      Hello world !
    </Button>
    <p v-if="isClickedButton" class="mt-3 text-green-500">Button clicked !</p>
  </div>

  <div class="p-5 space-y-4">
    <h1 class="mb-5">More examples :</h1>

    <h1 class="mb-3">Disable :</h1>
    <Button :disabled="true" size="md" @click="isClickedButton = !isClickedButton"> Disable Button </Button>

    <h1 class="mb-3">Loading Spinner :</h1>
    <Button
      class="text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 shadow-lg"
      :loading="true"
      size="lg"
      @click="isClickedButton = !isClickedButton"
    >
      Spinner Button
    </Button>

    <h1 class="mb-3">Loading Ping :</h1>
    <Button
      class="text-white bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 shadow-lg"
      :ping="true"
      size="lg"
      @click="isClickedButton = !isClickedButton"
    >
      Ping Button
    </Button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Button from '@/components/button/Button.vue';

const isClickedButton = ref(false);
</script>
