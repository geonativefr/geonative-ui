<template>
  <AbstractLayout>
    <router-view name="layout" v-slot="{ Component }">
      <component :is="Component">
        <router-view name="default" v-slot="{ Component }">
          <component :is="Component">
            <slot />
          </component>
        </router-view>
      </component>
    </router-view>
  </AbstractLayout>
</template>

<script lang="ts" setup>
import { AbstractLayout } from '@geonative/ui/components';
</script>
