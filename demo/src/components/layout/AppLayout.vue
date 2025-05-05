<template>
  <div class="flex h-screen w-screen">

      <div class="w-1/5 h-full flex items-center justify-center">
        <slot name="sidebar" />
      </div>

    <div class="w-4/5 h-full flex flex-col">

      <div class="h-1/10 w-full bg-gray-950 flex items-center justify-start pl-4">
        <slot name="header" />
      </div>

      <div class="flex-1 w-full bg-gray-950 flex items-center justify-center">
        <slot name="content" />
      </div>

    </div>

  </div>
  <slot />
</template>

<script setup lang="ts">
</script>
<script setup lang="ts"></script>
