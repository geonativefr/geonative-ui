import type { Meta, StoryObj } from '@storybook/vue3';
import Breadcrumb from '@/components/breadcrumb/Breadcrumb.vue';
import type { Breadcrumb as BreadcrumbType } from '@/types';

const meta = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
  argTypes: {
    breadcrumb: {
      control: 'object',
    },
  },
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    breadcrumb: {
      items: [
        { title: 'Home', link: '/' },
        { title: 'Components' },
        { title: 'Breadcrumb' },
      ],
      separator: '>',
    } as BreadcrumbType,
  },
};

export const WithLinks: Story = {
  args: {
    breadcrumb: {
      items: [
        { title: 'Home', link: '/' },
        { title: 'Components', link: '/components' },
        { title: 'Breadcrumb', link: '/components/breadcrumb' },
      ],
      separator: '>',
    } as BreadcrumbType,
  },
};

export const WithDisabled: Story = {
  args: {
    breadcrumb: {
      items: [
        { title: 'Home', link: '/' },
        { title: 'Components', link: '/components' },
        { title: 'Breadcrumb', link: '/components/breadcrumb', disabled: true },
      ],
      separator: '>',
    } as BreadcrumbType,
  },
};

export const CustomSeparator: Story = {
  args: {
    breadcrumb: {
      items: [
        { title: 'Home', link: '/' },
        { title: 'Components', link: '/components' },
        { title: 'Breadcrumb', link: '/components/breadcrumb' },
      ],
      separator: '/',
    } as BreadcrumbType,
  },
};