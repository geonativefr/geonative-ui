<template>
  <div v-html="htmlContent" class="markdown-body"></div>
</template>

<script setup lang="ts">
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { computed } from 'vue';

const props = defineProps<{
  content: string;
}>();

// First render markdown, then sanitize the HTML output
const htmlContent = computed(() => {
  // Use marked.parse() with a callback to handle both sync and async cases
  const rawHtml = marked.parse(props.content, {
    async: false
  }) as string;

  return DOMPurify.sanitize(rawHtml);
});
</script>