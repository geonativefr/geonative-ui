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

    <!-- Bouton primaire -->
    <Button
      class="bg-blue-500 text-white hover:bg-blue-600 rounded-lg px-4 py-2 shadow-md"
      :disabled="false"
      size="md"
    >
      Bouton primaire
    </Button>

    <!-- Bouton secondaire -->
    <Button
      class="bg-gray-500 text-white hover:bg-gray-600 rounded-lg px-4 py-2 shadow-md"
      :disabled="false"
      size="md"
    >
      Bouton secondaire
    </Button>

    <!-- Bouton succès -->
    <Button
      class="bg-green-500 text-white hover:bg-green-600 rounded-lg px-4 py-2 shadow-md"
      :disabled="false"
      size="md"
    >
      Bouton succès
    </Button>

    <!-- Bouton danger -->
    <Button
      class="bg-red-500 text-white hover:bg-red-600 rounded-lg px-4 py-2 shadow-md"
      :disabled="false"
      size="md"
    >
      Bouton danger
    </Button>

    <!-- Bouton avec bordure -->
    <Button
      class="border border-blue-500 text-blue-500 hover:bg-blue-100 rounded-lg px-4 py-2 shadow-md"
      :disabled="false"
      size="md"
    >
      Bouton avec bordure
    </Button>

    <!-- Bouton désactivé -->
    <Button
      class="bg-gray-300 text-gray-500 rounded-lg px-4 py-2 shadow-md"
      :disabled="true"
      size="md"
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
