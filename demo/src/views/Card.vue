<template>
  <div class="flex flex-col items-center justify-center min-h-screen p-5 space-y-10">
    <div>
      <Card size="sm">
        <template #header>
          <CardTitle> This is a Title </CardTitle>
          <CardDescription> This is a Description </CardDescription>
        </template>

        <span>This is a Content</span>

        <template #footer>
          <span>This a footer</span>
        </template>
      </Card>
    </div>

    <div>
      <Card size="md">
        <template #header>
          <CardTitle> This is a Title </CardTitle>
          <CardDescription> This is a Description </CardDescription>
        </template>

        <span>This is a Content</span>

        <template #footer>
          <span>This a footer</span>
        </template>
      </Card>
    </div>

    <div>
      <Card size="lg">
        <template #header>
          <CardTitle> This is a Title </CardTitle>
          <CardDescription> This is a Description </CardDescription>
        </template>

        <span>This is a Content</span>

        <template #footer>
          <span>This a footer</span>
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Card, CardTitle, CardDescription } from '@geonative/ui/components';
</script>
