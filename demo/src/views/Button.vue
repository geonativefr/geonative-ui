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
    <h1 class="mb-3">Exemples de styles de boutons :</h1>
    <!-- Bouton désactivé -->
    <Button
      :disabled="true"
      size="md"
      @click="isClickedButton = !isClickedButton"
    >
      Bouton désactivé
    </Button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Button from '@/components/button/Button.vue';

const isClickedButton = ref(false);
</script>
