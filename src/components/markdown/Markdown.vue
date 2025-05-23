<template>
  <div v-html="htmlContent" :class="twMerge('markdown-body', props.class)"></div>
</template>

<script setup lang="ts">
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { computed } from 'vue';
import { useTheme } from '@geonative/ui/composables';
import type { ThemeConfig } from '@geonative/ui/types';
import { twMerge } from 'tailwind-merge';

const props = defineProps<{
  content: string;
  class?: string;
}>();

// First render markdown, then sanitize the HTML output
const htmlContent = computed(() => {
  // Use marked.parse() with a callback to handle both sync and async cases
  const rawHtml = marked.parse(props.content, {
    async: false,
  }) as string;

  return DOMPurify.sanitize(rawHtml);
});

// Retrieve the current theme from the theme store
const { currentTheme, getThemeConfig } = useTheme();
const themeConfig = getThemeConfig(currentTheme.value) as ThemeConfig;
// Retrieve theme values for styling
const {
  background,
  foreground,
  primary: primaryBackground,
  'primary-foreground': primaryForeground,
  secondary: secondaryBackground,
  'secondary-foreground': secondaryForeground,
  accent: accentBackground,
  'accent-foreground': accentForeground,
  popover: popoverBackground,
  'popover-foreground': popoverForeground,
  card: cardBackground,
  'card-foreground': cardForeground,
  muted: mutedBackground,
  'muted-foreground': mutedForeground,
  border: borderColor,
  input: inputColor,
  ring: ringColor,
  radius,
} = themeConfig;
</script>

<style>
.markdown-body {
  background-color: v-bind(background);
  color: v-bind(foreground);
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
  color: v-bind(secondaryForeground);
  text-decoration: underline;
}

.markdown-body a:hover {
  color: v-bind(accentForeground);
}

.markdown-body blockquote {
  padding-left: 1rem;
  border-left: 4px solid v-bind(borderColor);
  font-style: italic;
  margin: 1rem 0;
}

.markdown-body pre {
  background-color: v-bind(primaryBackground);
  color: v-bind(primaryForeground);
  border-radius: v-bind(radius);
  padding: 1rem;
  margin: 1rem 0;
  overflow: auto;
}

.markdown-body code {
  background-color: v-bind(primaryBackground);
  color: v-bind(primaryForeground);
  border-radius: v-bind(radius);
  padding: 0.125rem 0.25rem;
  font-family: monospace;
  font-size: 0.875rem;
}

.markdown-body pre code {
  background-color: v-bind(primaryBackground);
  color: v-bind(primaryForeground);
  padding: 0;
}

.markdown-body table {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
}

.markdown-body th {
  border: 1px solid v-bind(borderColor);
  padding: 0.5rem 1rem;
  background-color: v-bind(secondaryBackground);
  font-weight: 700;
  text-align: left;
}

.markdown-body td {
  border: 1px solid v-bind(borderColor);
  padding: 0.5rem 1rem;
}

.markdown-body img {
  max-width: 100%;
  margin: 1rem 0;
}

.markdown-body hr {
  margin: 1.5rem 0;
  border-top: 1px solid v-bind(borderColor);
}
</style>
