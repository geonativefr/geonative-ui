<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/shadcn/lib/utils'
import { provide } from 'vue'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()

provide(Symbol('SidebarContext'), { isMobile: false })
</script>

<template>
  <ul
    data-slot="sidebar-menu"
    data-sidebar="menu"
    :class="cn('flex w-full min-w-0 flex-col gap-1', props.class)"
  >
    <slot />
  </ul>
</template>