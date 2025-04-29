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
        clickAction: '/team',
        iconProps: { name: 'users', source: 'heroicons', type: 'outline', class: 'h-4 w-4' },
      },
      {
        label: 'Invite users',
        clickAction: '/invite',
        iconProps: { name: 'UserPlus', source: 'heroicons', type: 'outline', class: 'h-4 w-4' },
        sections: [
          [
            {
              label: 'Email',
              clickAction: '/invite/email',
              iconProps: { name: 'Mail', source: 'lucide', class: 'h-4 w-4' },
            },
            {
              label: 'Phone',
              clickAction: '/invite/phone',
              iconProps: { name: 'Phone', source: 'lucide', class: 'h-4 w-4' },
            },
            {
              label: 'Message',
              clickAction: '/invite/message',
              iconProps: { name: 'MessageCircle', source: 'lucide', class: 'h-4 w-4' },
            },
            {
              label: 'Link',
              clickAction: '/invite/link',
              iconProps: { name: 'link', source: 'heroicons', class: 'h-4 w-4' },
              sections: [
                [
                  {
                    label: 'Copy',
                    clickAction: '/invite/link/copy',
                    iconProps: { name: 'Clipboard', source: 'heroicons', type: 'outline', class: 'h-4 w-4' },
                  },
                  {
                    label: 'Share',
                    clickAction: '/invite/link/share',
                    iconProps: { name: 'Share', source: 'lucide', class: 'h-4 w-4' },
                    sections: [
                      [
                        { label: 'Facebook', clickAction: '/invite/link/share/facebook' },
                        { label: 'Twitter', clickAction: '/invite/link/share/twitter' },
                      ],
                    ],
                  },
                  { label: 'Send', clickAction: '/invite/link/send' },
                ],
                [
                  { label: 'Image', clickAction: '/invite/link/share/image' },
                  { label: 'Text', clickAction: '/invite/link/share/text' },
                  { label: 'Video', clickAction: '/invite/link/share/video' },
                ],
                [
                  { label: 'Friends', clickAction: '/invite/link/share/friends' },
                  { label: 'Everyone', clickAction: '/invite/link/share/everyone' },
                ],
              ],
            },
          ],
        ],
      },
      {
        label: 'Create team',
        clickAction: '/create-team',
        iconProps: { name: 'PlusCircle', source: 'lucide', class: 'h-4 w-4' },
      },
    ],
    [
      {
        label: 'Alert',
        clickAction: () => {
          alert('Alert');
        },
        iconProps: { name: 'bell', source: 'heroicons', type: 'solid', class: 'h-5 w-5 text-red-500' },
      },
    ],
    [
      {
        label: 'GitHub',
        shortcut: '⌘+G',
        clickAction: 'https://github.com',
        iconProps: { name: 'Code', source: 'lucide', class: 'h-4 w-4' },
      },
      {
        label: 'Support',
        clickAction: '/support',
        iconProps: { name: 'HelpCircle', source: 'lucide', class: 'h-4 w-4' },
        sections: [],
      },
      {
        label: 'API',
        shortcut: '⌘+A',
        disabled: true,
        clickAction: '/api',
        iconProps: { name: 'server', source: 'heroicons', type: 'outline', class: 'h-4 w-4' },
      },
      {
        label: 'Settings',
        clickAction: '/settings',
        iconProps: { name: 'wrench', source: 'heroicons', type: 'outline', class: 'h-4 w-4' },
        sections: [
          [
            { label: 'Profile', clickAction: '/settings/profile' },
            { label: 'Account', clickAction: '/settings/account' },
          ],
          [
            {
              label: 'Security',
              clickAction: '/settings/security',
              iconProps: { name: 'shield-check', source: 'heroicons', type: 'outline', class: 'h-4 w-4' },
            },
            {
              label: 'Privacy',
              clickAction: '/settings/privacy',
              iconProps: { name: 'lock-closed', source: 'heroicons', type: 'outline', class: 'h-4 w-4' },
            },
          ],
        ],
      },
    ],
    [
      {
        label: 'Home',
        clickAction: '/',
        iconProps: { name: 'home', source: 'heroicons', type: 'outline', class: 'h-4 w-4' },
      },
      {
        label: 'Avatar',
        clickAction: '/avatar',
        iconProps: { name: 'user', source: 'heroicons', type: 'outline', class: 'h-4 w-4' },
      },
      {
        label: 'Breadcrumb',
        clickAction: '/breadcrumb',
        iconProps: { name: 'AlertCircle', source: 'lucide', class: 'h-4 w-4' },
      },
      {
        label: 'Loader',
        clickAction: '/loader',
        iconProps: { name: 'arrow-path', source: 'heroicons', class: 'h-4 w-4' },
      },
      {
        label: 'Icon',
        clickAction: '/icon',
        iconProps: { name: 'beaker', source: 'heroicons', class: 'h-4 w-4' },
      },
      {
        label: 'Button',
        clickAction: '/button',
        iconProps: { name: 'rectangle-stack', source: 'heroicons', class: 'h-4 w-4' },
      },
    ],
    [
      {
        label: 'clickAction null',
        clickAction: null,
      },
      {
        label: 'clickAction vide',
        clickAction: '',
      },
      {
        clickAction: '/pas-de-label',
      },
    ],
  ],
};
</script>
