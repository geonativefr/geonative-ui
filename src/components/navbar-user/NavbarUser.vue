<template>
  <div>
    <ShadcnDropdownMenu>
      <ShadcnDropdownMenuTrigger as-child>
        <button
          size="lg"
          class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground flex items-center gap-4 p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <Avatar v-bind="avatarProps" />
          <div class="grid flex-1 text-left text-sm leading-tight">
            <span class="truncate font-semibold">{{ props.user.name }}</span>
            <span class="truncate text-xs">{{ props.user.email }}</span>
          </div>
          <ChevronsUpDown class="ml-7 size-5" />
        </button>
      </ShadcnDropdownMenuTrigger>
      <ShadcnDropdownMenuContent
        class="min-w-56 rounded-lg"
        side="right"
        align="end"
        :side-offset="4"
      >
        <ShadcnDropdownMenuLabel class="p-0 font-normal">
          <div class="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
            <Avatar v-bind="avatarProps" />
            <div class="grid flex-1 text-left text-sm leading-tight">
              <span class="truncate font-semibold">{{ props.user.name }}</span>
              <span class="truncate text-xs">{{ props.user.email }}</span>
            </div>
          </div>
        </ShadcnDropdownMenuLabel>
        <ShadcnDropdownMenuSeparator />
        <ShadcnDropdownMenuGroup>
          <ShadcnDropdownMenuItem>
            <Sparkles />
            Upgrade to Pro
          </ShadcnDropdownMenuItem>
        </ShadcnDropdownMenuGroup>
        <ShadcnDropdownMenuSeparator />
        <ShadcnDropdownMenuGroup>
          <ShadcnDropdownMenuItem>
            <BadgeCheck />
            Account
          </ShadcnDropdownMenuItem>
          <ShadcnDropdownMenuItem>
            <CreditCard />
            Billing
          </ShadcnDropdownMenuItem>
          <ShadcnDropdownMenuItem>
            <Bell />
            Notifications
          </ShadcnDropdownMenuItem>
        </ShadcnDropdownMenuGroup>
        <ShadcnDropdownMenuSeparator />
        <ShadcnDropdownMenuItem>
          <LogOut />
          Log out
        </ShadcnDropdownMenuItem>
      </ShadcnDropdownMenuContent>
    </ShadcnDropdownMenu>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import Avatar from '@/components/avatar/Avatar.vue';
import {
  DropdownMenu as ShadcnDropdownMenu,
  DropdownMenuGroup as ShadcnDropdownMenuGroup,
  DropdownMenuItem as ShadcnDropdownMenuItem,
  DropdownMenuContent as ShadcnDropdownMenuContent,
  DropdownMenuLabel as ShadcnDropdownMenuLabel,
  DropdownMenuSeparator as ShadcnDropdownMenuSeparator,
  DropdownMenuTrigger as ShadcnDropdownMenuTrigger,
} from '@/shadcn/ui/dropdown-menu';
import {
  BadgeCheck,
  Bell,
  ChevronsUpDown,
  CreditCard,
  LogOut,
  Sparkles,
} from 'lucide-vue-next';

const props = defineProps<{
  user: {
    name: string;
    email: string;
    avatar: string;
  };
}>();

// Stocker les propriétés communes dans une constante calculée
const avatarProps = computed(() => ({
  url: props.user.avatar,
  bgColor: '#ff00ff',
  textColor: '#000000',
  initials: props.user.name.slice(0, 2),
  isSquare: true,
}));
</script>

