<template>
  <div class="m-5 grid grid-cols-1 gap-5 text-sm">
    <div class="flex justify-between gap-10">
      <span>Icon blue</span>
      <Icon name="antenna" source="svg" class="size-7 fill-blue-500" />
    </div>
    <div class="flex justify-between gap-10">
      <span>Icon default color</span>
      <Icon name="battery_batt-level-2" source="svg" class="size-8" />
    </div>
    <div class="flex justify-between gap-10">
      <span>Icon green</span>
      <Icon name="alert_actions_push-notification" source="svg" class="text-green-500" />
    </div>
    <div class="flex justify-between gap-10">
      <span>Missing icon</span>
      <Icon name="alert" source="svg" class="text-green-500" />
    </div>
    <div class="flex justify-between gap-10">
      <span>Lucide icon</span>
      <Icon name="AlertCircle" source="lucide" class="text-pink-700" />
    </div>
    <div class="flex justify-between gap-10">
      <span>Heroicon solid</span>
      <Icon name="academic-cap" source="heroicons" type="solid" class="text-yellow-500" />
    </div>
    <div class="flex justify-between gap-10">
      <span>Heroicon outline</span>
      <Icon name="academic-cap" source="heroicons" type="outline" class="text-orange-500" />
    </div>
    <div class="flex justify-between gap-10">
      <span>Avatar</span>
      <Icon
        name="alice"
        :avatar-props="{ url: user.avatar, isSquare: true, initials: user.name.slice(0, 2), class: 'bg-red-500' }"
        source="avatar"
      />
    </div>
    <div class="flex justify-between gap-10">
      <span>Avatar no image</span>
      <Icon
        name="alice"
        class="size-9"
        :avatar-props="{ isSquare: true, initials: user.name.slice(0, 2), class: 'text-primary-foreground bg-primary' }"
        source="avatar"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@geonative/ui/components';

const user = {
  name: 'alice',
  email: 'alice@example.com',
  avatar:
    'https://avataaars.io/?avatarStyle=Transparent&topType=NoHair&accessoriesType=Blank&facialHairType=MoustacheFancy&facialHairColor=BrownDark&clotheType=ShirtScoopNeck&clotheColor=Blue03&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=Light',
};
</script>
