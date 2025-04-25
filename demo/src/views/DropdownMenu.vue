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
        click: '/team',
        iconProps: { name: 'users', source: 'heroicons', type: 'outline', class: 'h-4 w-4' },
      },
      {
        label: 'Invite users',
        click: '/invite',
        iconProps: { name: 'UserPlus', source: 'heroicons', type: 'outline', class: 'h-4 w-4' },
        sections: [
          [
            {
              label: 'Email',
              click: '/invite/email',
              iconProps: { name: 'Mail', source: 'lucide', class: 'h-4 w-4' },
            },
            {
              label: 'Phone',
              click: '/invite/phone',
              iconProps: { name: 'Phone', source: 'lucide', class: 'h-4 w-4' },
            },
            {
              label: 'Message',
              click: '/invite/message',
              iconProps: { name: 'MessageCircle', source: 'lucide', class: 'h-4 w-4' },
            },
            {
              label: 'Link',
              click: '/invite/link',
              iconProps: { name: 'link', source: 'heroicons', class: 'h-4 w-4' },
              sections: [
                [
                  {
                    label: 'Copy',
                    click: '/invite/link/copy',
                    iconProps: { name: 'Clipboard', source: 'heroicons', type: 'outline', class: 'h-4 w-4' },
                  },
                  {
                    label: 'Share',
                    click: '/invite/link/share',
                    iconProps: { name: 'Share', source: 'lucide', class: 'h-4 w-4' },
                    sections: [
                      [
                        { label: 'Facebook', click: '/invite/link/share/facebook' },
                        { label: 'Twitter', click: '/invite/link/share/twitter' },
                      ],
                    ],
                  },
                  { label: 'Send', click: '/invite/link/send' },
                ],
                [
                  { label: 'Image', click: '/invite/link/share/image' },
                  { label: 'Text', click: '/invite/link/share/text' },
                  { label: 'Video', click: '/invite/link/share/video' },
                ],
                [
                  { label: 'Friends', click: '/invite/link/share/friends' },
                  { label: 'Everyone', click: '/invite/link/share/everyone' },
                ],
              ],
            },
          ],
        ],
      },
      {
        label: 'Create team',
        click: '/create-team',
        iconProps: { name: 'PlusCircle', source: 'lucide', class: 'h-4 w-4' },
      },
    ],
    [
      {
        label: 'Alert',
        click: () => {
          alert('Alert');
        },
        iconProps: { name: 'bell', source: 'heroicons', type: 'solid', class: 'h-5 w-5 text-red-500' },
      },
    ],
    [
      {
        label: 'GitHub',
        shortcut: '⌘+G',
        click: 'https://github.com',
        iconProps: { name: 'Code', source: 'lucide', class: 'h-4 w-4' },
      },
      {
        label: 'Support',
        click: '/support',
        iconProps: { name: 'HelpCircle', source: 'lucide', class: 'h-4 w-4' },
        sections: [],
      },
      {
        label: 'API',
        shortcut: '⌘+A',
        disabled: true,
        click: '/api',
        iconProps: { name: 'server', source: 'heroicons', type: 'outline', class: 'h-4 w-4' },
      },
      {
        label: 'Settings',
        click: '/settings',
        iconProps: { name: 'wrench', source: 'heroicons', type: 'outline', class: 'h-4 w-4' },
        sections: [
          [
            { label: 'Profile', click: '/settings/profile' },
            { label: 'Account', click: '/settings/account' },
          ],
          [
            {
              label: 'Security',
              click: '/settings/security',
              iconProps: { name: 'shield-check', source: 'heroicons', type: 'outline', class: 'h-4 w-4' },
            },
            {
              label: 'Privacy',
              click: '/settings/privacy',
              iconProps: { name: 'lock-closed', source: 'heroicons', type: 'outline', class: 'h-4 w-4' },
            },
          ],
        ],
      },
    ],
    [
      {
        label: 'Home',
        click: '/',
        iconProps: { name: 'home', source: 'heroicons', type: 'outline', class: 'h-4 w-4' },
      },
      {
        label: 'Avatar',
        click: '/avatar',
        iconProps: { name: 'user', source: 'heroicons', type: 'outline', class: 'h-4 w-4' },
      },
      {
        label: 'Breadcrumb',
        click: '/breadcrumb',
        iconProps: { name: 'AlertCircle', source: 'lucide', class: 'h-4 w-4' },
      },
      {
        label: 'Loader',
        click: '/loader',
        iconProps: { name: 'arrow-path', source: 'heroicons', class: 'h-4 w-4' },
      },
      {
        label: 'Icon',
        click: '/icon',
        iconProps: { name: 'beaker', source: 'heroicons', class: 'h-4 w-4' },
      },
      {
        label: 'Button',
        click: '/button',
        iconProps: { name: 'rectangle-stack', source: 'heroicons', class: 'h-4 w-4' },
      },
    ],
    [
      {
        label: 'click null',
        click: null,
      },
      {
        label: 'click vide',
        click: '',
      },
      {
        click: '/pas-de-label',
      },
    ],
  ],
};
</script>
