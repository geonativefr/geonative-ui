<template>
  <div class="p-5">
    <h1 class="mb-3">Button :</h1>
    <Button
      class="text-blue-500 bg-blue-100 rounded-full"
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

    <h1 class="mb-3">Loading :</h1>
    <Button
      class="bg-blue-500"
      :loading="true"
      loading-text="Loading..."
      size="sm"
      @click="isClickedButton = !isClickedButton"
    >Spinner Button</Button>
    <Button
      class="bg-blue-500"
      :loading="true"
      size="sm"
      @click="isClickedButton = !isClickedButton"
    >Spinner Button</Button>
  </div>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import Button from '@geonative/ui/components/button/Button.vue';

const isClickedButton = ref(false);
</script>
