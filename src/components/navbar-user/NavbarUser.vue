<template>
  <div>
    <NavBarUserDropDownMenu :user="props.user" :sections="props.dropdown.sections" />
  </div>
</template>

<script setup lang="ts">
import NavBarUserDropDownMenu from '@/components/navbar-user/NavBarUserDropDownMenu.vue';

const props = defineProps({
  user: {
    type: Object as () => { name: string; email: string; avatar: string },
    required: true,
  },
  dropdown: {
    type: Object as () => { sections: Array<Array<{ label: string; url?: string; shortcut?: string }>> },
    required: true,
  },
});
</script>