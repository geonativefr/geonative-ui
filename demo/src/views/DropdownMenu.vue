<template>
  <div class="p-5">
    <h1 class="mb-3">DROPDOWNMENU :</h1>
    <div class="grid grid-cols-1 gap-5 place-items-center">
      <p class="mb-3">default:</p>
      <DropdownMenu :sections="dropdownMenu.sections" name="Menu 1" :label="dropdownMenu.name" />
      <p class="mb-3 mt-30">position right + align end :</p>
      <DropdownMenu
        :sections="dropdownMenu.sections"
        name="Menu 2"
        :label="dropdownMenu.name"
        position="right"
        align="end"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import DropdownMenu from '@/components/dropdown-menu/DropdownMenu.vue';
import type { DropdownMenu as DropdownMenuType } from '@/types/dropdown-menu.ts';
import { Users, Mail, Link, Copy, Share, Home, Settings, Shield, Lock } from 'lucide-vue-next';

const dropdownMenu: DropdownMenuType = {
  name: 'Menu Label',
  sections: [
    [
      {
        label: 'Team',
        url: '/team',
        icon: Users,
      },
      {
        label: 'Invite users',
        url: '/invite',
        sections: [
          [
            { label: 'Email', url: '/invite/email', icon: Mail },
            { label: 'Message', url: '/invite/message' },
            {
              label: 'Link',
              url: '/invite/link',
              icon: Link,
              sections: [
                [
                  { label: 'Copy', url: '/invite/link/copy', icon: Copy },
                  {
                    label: 'Share',
                    url: '/invite/link/share',
                    icon: Share,
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
                [
                  { label: 'Friends', url: '/invite/link/share/friends' },
                  { label: 'Everyone', url: '/invite/link/share/everyone' },
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
        sections: [
        ],
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
        icon: Settings,
        sections: [
          [
            { label: 'Profile', url: '/settings/profile' },
            { label: 'Account', url: '/settings/account' },
          ],
          [
            { label: 'Security', url: '/settings/security', icon: Shield },
            { label: 'Privacy', url: '/settings/privacy', icon: Lock },
          ],
        ],
      },
    ],
    [
      {
        label: 'Home',
        url: '/',
        icon: Home,
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
    [
      {
        label: 'Pas url',
      },
      {
        label: 'Url vide',
        url: '',
      },
      {
        url: '/pas-de-label',
      },
    ],
  ],
};
</script>
