<template>
  <div class="p-5">
    <h1 class="mb-3">DROPDOWNMENU :</h1>
    <DropdownMenu :items="dropdownMenuItems as any" name="Menu" label="Menu Label" />
  </div>
</template>

<script setup lang="ts">
import DropdownMenu from '@/components/dropdown-menu/DropdownMenu.vue';

const dropdownMenuItems = [
  {
    category: 'Team',
    items: [
      {
        group: [
          { title: 'Team', link: '/team' },
          {
            title: 'Invite users',
            link: '/invite',
            submenu: [
              { title: 'Email', link: '/invite/email' },
              { title: 'Message', link: '/invite/message' },
              { separator: true },
              { title: 'More…', link: '/invite/more' },
            ],
          },
          { title: 'New Team', shortcut: '⌘+T', link: '/team/new' },
        ],
      },
    ],
  },
  {
    category: 'Links',
    items: [
      {
        group: [
          { title: 'GitHub', link: 'https://github.com' },
          { title: 'Support', link: '/support' },
          { title: 'API', disabled: true, link: '/api' },
        ],
      },
    ],
  },
  {
    category: 'Components',
    items: [
      {
        group: [
          { title: 'Home', link: '/' },
          { title: 'Breadcrumb', link: '/breadcrumb' },
          { title: 'Avatar', link: '/avatar' },
        ],
      },
    ],
  },
];
</script>
