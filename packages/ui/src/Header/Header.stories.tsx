import type { Meta, StoryObj } from '@storybook/react';
import Header from '@/Header/Header';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    variant: "secondary",
  },
};

export const GreenBackground: Story = {
  args: {
    variant: 'secondary',
  },
};
