<template>
  <div class="p-5">
    <h1 class="mb-3">DROPDOWNMENU :</h1>
    <div class="grid grid-cols-1 gap-5 place-items-center">
      <p class="mb-3">default:</p>
      <DropdownMenu :sections="dropdownMenu.sections" :label="dropdownMenu.name">
        <Button
          class="text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 shadow-lg"
          >Menu 1</Button
        >
      </DropdownMenu>
      <p class="mb-3 mt-30">position right + align end :</p>
      <DropdownMenu
        :sections="dropdownMenu.sections"
        name="Menu 2"
        :label="dropdownMenu.name"
        position="right"
        align="end"
      >
        <Button
          class="text-white bg-gradient-to-r from-pink-500 to-pink-700 hover:from-pink-600 hover:to-pink-800 shadow-lg"
          >Menu 2</Button
        >
      </DropdownMenu>
    </div>
  </div>
</template>

<script setup lang="ts">
import DropdownMenu from '@geonative/ui/components/dropdown-menu/DropdownMenu.vue';
import type { DropdownMenu as DropdownMenuType } from '@geonative/ui/types/dropdown-menu.ts';
import Button from '@geonative/ui/components/button/Button.vue';

const dropdownMenu: DropdownMenuType = {
  name: 'Menu Label',
  sections: [
    [
      {
        label: 'Team',
        url: '/team',
        iconProps: { name: 'users', source: 'heroicons', type: 'outline', class: 'h-4 w-4' },
      },
      {
        label: 'Invite users',
        url: '/invite',
        iconProps: { name: 'UserPlus', source: 'heroicons', type: 'outline', class: 'h-4 w-4' },
        sections: [
          [
            {
              label: 'Email',
              url: '/invite/email',
              iconProps: { name: 'Mail', source: 'lucide', class: 'h-4 w-4' },
            },
            {
              label: 'Phone',
              url: '/invite/phone',
              iconProps: { name: 'Phone', source: 'lucide', class: 'h-4 w-4' },
            },
            {
              label: 'Message',
              url: '/invite/message',
              iconProps: { name: 'MessageCircle', source: 'lucide', class: 'h-4 w-4' },
            },
            {
              label: 'Link',
              url: '/invite/link',
              iconProps: { name: 'link', source: 'heroicons', class: 'h-4 w-4' },
              sections: [
                [
                  {
                    label: 'Copy',
                    url: '/invite/link/copy',
                    iconProps: { name: 'Clipboard', source: 'heroicons', type: 'outline', class: 'h-4 w-4' },
                  },
                  {
                    label: 'Share',
                    url: '/invite/link/share',
                    iconProps: { name: 'Share', source: 'lucide', class: 'h-4 w-4' },
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
        iconProps: { name: 'PlusCircle', source: 'lucide', class: 'h-4 w-4' },
      },
    ],
    [
      {
        label: 'GitHub',
        shortcut: '⌘+G',
        url: 'https://github.com',
        iconProps: { name: 'Code', source: 'lucide', class: 'h-4 w-4' },
      },
      {
        label: 'Support',
        url: '/support',
        iconProps: { name: 'HelpCircle', source: 'lucide', class: 'h-4 w-4' },
        sections: [],
      },
      {
        label: 'API',
        shortcut: '⌘+A',
        disabled: true,
        url: '/api',
        iconProps: { name: 'server', source: 'heroicons', type: 'outline', class: 'h-4 w-4' },
      },
      {
        label: 'Settings',
        url: '/settings',
        iconProps: { name: 'wrench', source: 'heroicons', type: 'outline', class: 'h-4 w-4' },
        sections: [
          [
            { label: 'Profile', url: '/settings/profile' },
            { label: 'Account', url: '/settings/account' },
          ],
          [
            {
              label: 'Security',
              url: '/settings/security',
              iconProps: { name: 'shield-check', source: 'heroicons', type: 'outline', class: 'h-4 w-4' },
            },
            {
              label: 'Privacy',
              url: '/settings/privacy',
              iconProps: { name: 'lock-closed', source: 'heroicons', type: 'outline', class: 'h-4 w-4' },
            },
          ],
        ],
      },
    ],
    [
      {
        label: 'Home',
        url: '/',
        iconProps: { name: 'home', source: 'heroicons', type: 'outline', class: 'h-4 w-4' },
      },
      {
        label: 'Avatar',
        url: '/avatar',
        iconProps: { name: 'user', source: 'heroicons', type: 'outline', class: 'h-4 w-4' },
      },
      {
        label: 'Breadcrumb',
        url: '/breadcrumb',
        iconProps: { name: 'AlertCircle', source: 'lucide', class: 'h-4 w-4' },
      },
      {
        label: 'Loader',
        url: '/loader',
        iconProps: { name: 'arrow-path', source: 'heroicons', class: 'h-4 w-4' },
      },
      {
        label: 'Icon',
        url: '/icon',
        iconProps: { name: 'beaker', source: 'heroicons', class: 'h-4 w-4' },
      },
      {
        label: 'Button',
        url: '/button',
        iconProps: { name: 'rectangle-stack', source: 'heroicons', class: 'h-4 w-4' },
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
