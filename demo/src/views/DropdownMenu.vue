<template>
  <div class="p-5">
    <h1 class="mb-3">Dropdown Menu :</h1>
    <div class="place-items-center">
      <p class="mb-3">default:</p>
      <DropdownMenu :dropdown="dropdownMenu">
        <template #header>
          <p class="font-semibold text-center">{{ dropdownMenu.label }}</p>
        </template>
        <Button class="text-blue-500 bg-blue-100 rounded-full">Menu 1</Button>
      </DropdownMenu>
      <p class="mb-3 mt-30">position right + align end :</p>
      <DropdownMenu :dropdown="dropdownMenu" position="right" align="end">
        <Button class="text-pink-500 bg-pink-100 rounded-full">Menu 2</Button>
      </DropdownMenu>
    </div>
  </div>
</template>

<script setup lang="ts">
import { DropdownMenu } from '@geonative/ui/components';
import type { DropdownMenuType } from '@geonative/ui/types';
import { Button } from '@geonative/ui/components';

const dropdownMenu: DropdownMenuType = {
  label: 'Menu Label',
  sections: [
    [
      {
        label: 'Team',
        action: '/team',
        iconProps: { name: 'users', source: 'heroicons', type: 'outline', class: 'h-4 w-4' },
      },
      {
        label: 'Invite users',
        action: '/invite',
        iconProps: { name: 'UserPlus', source: 'heroicons', type: 'outline', class: 'h-4 w-4' },
        sections: [
          [
            {
              label: 'Email',
              action: '/invite/email',
              iconProps: { name: 'Mail', source: 'lucide', class: 'h-4 w-4' },
            },
            {
              label: 'Phone',
              action: '/invite/phone',
              iconProps: { name: 'Phone', source: 'lucide', class: 'h-4 w-4' },
            },
            {
              label: 'Message',
              action: '/invite/message',
              iconProps: { name: 'MessageCircle', source: 'lucide', class: 'h-4 w-4' },
            },
            {
              label: 'Link',
              action: '/invite/link',
              iconProps: { name: 'link', source: 'heroicons', class: 'h-4 w-4' },
              sections: [
                [
                  {
                    label: 'Copy',
                    action: '/invite/link/copy',
                    iconProps: { name: 'Clipboard', source: 'heroicons', type: 'outline', class: 'h-4 w-4' },
                  },
                  {
                    label: 'Share',
                    action: '/invite/link/share',
                    iconProps: { name: 'Share', source: 'lucide', class: 'h-4 w-4' },
                    sections: [
                      [
                        { label: 'Facebook', action: '/invite/link/share/facebook' },
                        { label: 'Twitter', action: '/invite/link/share/twitter' },
                      ],
                    ],
                  },
                  { label: 'Send', action: '/invite/link/send' },
                ],
                [
                  { label: 'Image', action: '/invite/link/share/image' },
                  { label: 'Text', action: '/invite/link/share/text' },
                  { label: 'Video', action: '/invite/link/share/video' },
                ],
                [
                  { label: 'Friends', action: '/invite/link/share/friends' },
                  { label: 'Everyone', action: '/invite/link/share/everyone' },
                ],
              ],
            },
          ],
        ],
      },
      {
        label: 'Create team',
        action: '/create-team',
        iconProps: { name: 'PlusCircle', source: 'lucide', class: 'h-4 w-4' },
      },
    ],
    [
      {
        label: 'Alert',
        action: () => {
          alert('Alert');
          console.log('Alert');
        },
        iconProps: { name: 'bell', source: 'heroicons', type: 'solid', class: 'h-5 w-5 text-red-500' },
      },
    ],
    [
      {
        label: 'GitHub',
        shortcut: '⌘+G',
        action: 'https://github.com',
        iconProps: { name: 'Code', source: 'lucide', class: 'h-4 w-4' },
      },
      {
        label: 'Support',
        action: '/support',
        iconProps: { name: 'HelpCircle', source: 'lucide', class: 'h-4 w-4' },
        sections: [],
      },
      {
        label: 'API',
        shortcut: '⌘+A',
        disabled: true,
        action: '/api',
        iconProps: { name: 'server', source: 'heroicons', type: 'outline', class: 'h-4 w-4' },
      },
      {
        label: 'Settings',
        action: '/settings',
        iconProps: { name: 'wrench', source: 'heroicons', type: 'outline', class: 'h-4 w-4' },
        sections: [
          [
            { label: 'Profile', action: '/settings/profile' },
            { label: 'Account', action: '/settings/account' },
          ],
          [
            {
              label: 'Security',
              action: '/settings/security',
              iconProps: { name: 'shield-check', source: 'heroicons', type: 'outline', class: 'h-4 w-4' },
            },
            {
              label: 'Privacy',
              action: '/settings/privacy',
              iconProps: { name: 'lock-closed', source: 'heroicons', type: 'outline', class: 'h-4 w-4' },
            },
          ],
        ],
      },
    ],
    [
      {
        label: 'Home',
        action: '/',
        iconProps: { name: 'home', source: 'heroicons', type: 'outline', class: 'h-4 w-4' },
      },
      {
        label: 'Avatar',
        action: '/avatar',
        iconProps: { name: 'user', source: 'heroicons', type: 'outline', class: 'h-4 w-4' },
      },
      {
        label: 'Breadcrumb',
        action: '/breadcrumb',
        iconProps: { name: 'AlertCircle', source: 'lucide', class: 'h-4 w-4' },
      },
      {
        label: 'Loader',
        action: '/loader',
        iconProps: { name: 'arrow-path', source: 'heroicons', class: 'h-4 w-4' },
      },
      {
        label: 'Icon',
        action: '/icon',
        iconProps: { name: 'beaker', source: 'heroicons', class: 'h-4 w-4' },
      },
      {
        label: 'Button',
        action: '/button',
        iconProps: { name: 'rectangle-stack', source: 'heroicons', class: 'h-4 w-4' },
      },
    ],
    [
      {
        label: 'Pas url',
      },
      {
        label: 'Url vide',
        action: '',
      },
      {
        action: '/pas-de-label',
      },
    ],
  ],
};
</script>
