<template>
  <div class="flex flex-col items-center w-full">
    <div class="flex flex-col items-center justify-center w-full max-w-4xl px-4 mx-auto">
      <Markdown :content="content" class="markdown-body" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Markdown from '@ui/components/markdown/Markdown.vue';
import { ref } from 'vue';
import readmeContent from '../../../README.md?raw'; // Import the README file as raw text using Vite's raw loader

const content = ref(readmeContent);
</script>
