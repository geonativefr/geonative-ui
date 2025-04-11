import * as SolidIcons from '@heroicons/vue/24/solid';
import * as OutlineIcons from '@heroicons/vue/24/outline';
import type { Component } from 'vue';

interface HeroIcons {
  [key: string]: Component;
}

const heroIcons: HeroIcons = {};

// HeroIcons - Solid
(Object.keys(SolidIcons) as Array<keyof typeof SolidIcons>).forEach((key) => {
  heroIcons[`Solid${key}`] = SolidIcons[key];
});

// HeroIcons - Outline
(Object.keys(OutlineIcons) as Array<keyof typeof OutlineIcons>).forEach((key) => {
  heroIcons[`Outline${key}`] = OutlineIcons[key];
});

export default heroIcons;
