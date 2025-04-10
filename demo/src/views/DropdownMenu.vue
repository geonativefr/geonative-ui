<template>
  <div class="p-5">
    <h1 class="mb-3">DROPDOWNMENU :</h1>
    <DropdownMenu :sections="dropdownMenu.sections" name="Menu" :label="dropdownMenu.name" />
  </div>
</template>

<script setup lang="ts">
import DropdownMenu from '@/components/dropdown-menu/DropdownMenu.vue';
import type { DropdownMenu as DropdownMenuType } from '@/types/dropdown-menu.ts';

const dropdownMenu: DropdownMenuType = {
  name: 'Menu Label',
  sections: [
    [
      {
        label: 'Team',
        url: '/team',
      },
      {
        label: 'Invite users',
        url: '/invite',
        sections: [
          [
            { label: 'Email', url: '/invite/email' },
            { label: 'Message', url: '/invite/message' },
            {
              label: 'Link',
              url: '/invite/link',
              sections: [
                [
                  { label: 'Copy', url: '/invite/link/copy' },
                  {
                    label: 'Share',
                    url: '/invite/link/share',
                    sections: [
                      [
                        { label: 'Facebook', url: '/invite/link/share/facebook' },
                        { label: 'Twitter', url: '/invite/link/share/twitter' },
                      ],
                    ],
                  },
                  { label: 'Send', url: '/invite/link/send' },
                ],
                [
                  { label: 'Image', url: '/invite/link/share/image' },
                  { label: 'Text', url: '/invite/link/share/text' },
                  { label: 'Video', url: '/invite/link/share/video' },
                ],
              ],
            },
          ],
        ],
      },
      {
        label: 'Create team',
        url: '/create-team',
      },
    ],
    [
      {
        label: 'GitHub',
        shortcut: '⌘+G',
        url: 'https://github.com',
      },
      {
        label: 'Support',
        url: '/support',
      },
      {
        label: 'API',
        shortcut: '⌘+A',
        disabled: true,
        url: '/api',
      },
      {
        label: 'Settings',
        url: '/settings',
        sections: [
          [
            { label: 'Profile', url: '/settings/profile' },
            { label: 'Account', url: '/settings/account' },
          ],
          [
            { label: 'Security', url: '/settings/security' },
            { label: 'Privacy', url: '/settings/privacy' },
          ],
        ],
      },
    ],
    [
      {
        label: 'Home',
        url: '/',
      },
      {
        label: 'Breadcrumb',
        url: '/breadcrumb',
      },
      {
        label: 'Avatar',
        url: '/avatar',
      },
    ],
  ],
};
</script>
