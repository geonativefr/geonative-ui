<template>
  <div class="flex h-screen w-screen">
    <div class="w-1/5 h-full flex items-center justify-center">
      Sidebar
    </div>

    <div class="w-4/5 h-full flex flex-col">
      <div class="h-1/10 w-full flex items-center justify-start pl-4">
        Header
      </div>

      <div class="flex-1 w-full flex items-center justify-center">
        Content
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
