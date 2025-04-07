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
    async: false,
  }) as string;

  return DOMPurify.sanitize(rawHtml);
});
</script>

<style>
.markdown-body {
  font-size: 1rem;
  line-height: 1.5;
}

.markdown-body h1 {
  font-size: 1.875rem;
  font-weight: 700;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.markdown-body h2 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
}

.markdown-body h3 {
  font-size: 1.25rem;
  font-weight: 700;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
}

.markdown-body h4 {
  font-size: 1.125rem;
  font-weight: 700;
  margin-top: 1.25rem;
  margin-bottom: 0.5rem;
}

.markdown-body p {
  margin-bottom: 1rem;
}

.markdown-body ul {
  list-style-type: disc;
  padding-left: 1.25rem;
  margin-bottom: 1rem;
}

.markdown-body ol {
  list-style-type: decimal;
  padding-left: 1.25rem;
  margin-bottom: 1rem;
}

.markdown-body li {
  margin-bottom: 0.25rem;
}

.markdown-body a {
  color: #2563eb;
  text-decoration: underline;
}

.markdown-body a:hover {
  color: #1e40af;
}

.markdown-body blockquote {
  padding-left: 1rem;
  border-left: 4px solid #d1d5db;
  font-style: italic;
  margin: 1rem 0;
}

.markdown-body pre {
  background-color: #f3f4f6;
  border-radius: 0.25rem;
  padding: 1rem;
  margin: 1rem 0;
  overflow: auto;
}

.markdown-body code {
  background-color: #f3f4f6;
  border-radius: 0.25rem;
  padding: 0.125rem 0.25rem;
  font-family: monospace;
  font-size: 0.875rem;
}

.markdown-body pre code {
  background-color: transparent;
  padding: 0;
}

.markdown-body table {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
}

.markdown-body th {
  border: 1px solid #e5e7eb;
  padding: 0.5rem 1rem;
  background-color: #f3f4f6;
  font-weight: 700;
  text-align: left;
}

.markdown-body td {
  border: 1px solid #e5e7eb;
  padding: 0.5rem 1rem;
}

.markdown-body img {
  max-width: 100%;
  margin: 1rem 0;
}

.markdown-body hr {
  margin: 1.5rem 0;
  border-top: 1px solid #e5e7eb;
}
</style>
