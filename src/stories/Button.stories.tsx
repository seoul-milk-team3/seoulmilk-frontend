import type { Meta, StoryObj } from '@storybook/react';
import Button from '@/components/Button/Button';
import { TextTag } from '@/types/textTyes';

const textTagOptions: TextTag[] = [
  'xxl-title-bold',
  'xxl-title-semibold',
  'xl-title-bold',
  'xl-title-semibold',
  'lg-subtitle-bold',
  'lg-subtitle-semibold',
  'lg-subtitle-medium',
  'md1-text-bold',
  'md1-text-semibold',
  'md1-text-medium',
  'md1-text-regular',
  'md2-text-bold',
  'md2-text-semibold',
  'md2-text-medium',
  'md2-text-regular',
  'sm-text-semibold',
  'sm-text-medium',
  'sm-text-regular',
  'xs-text-medium',
  'xs-text-regular',
  'xs-text-light',
];

const meta: Meta<typeof Button> = {
  title: 'Common/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
      description: '버튼 스타일을 선택합니다.',
    },
    padding: {
      control: { type: 'text' },
      description: '버튼의 패딩을 설정합니다.',
    },
    tag: {
      control: { type: 'select' },
      options: textTagOptions,
      description: 'Text 컴포넌트의 스타일을 선택합니다.',
    },
    children: {
      control: 'text',
      description: '버튼 내부의 텍스트입니다.',
    },
    disabled: {
      control: 'boolean',
      description: '버튼을 비활성화합니다.',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    padding: '1.7rem 14.45rem',
    tag: 'lg-subtitle-semibold',
    children: 'Primary Button',
    disabled: false,
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    padding: '1.7rem 14.45rem',
    tag: 'lg-subtitle-semibold',
    children: 'Secondary Button',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    padding: '1.7rem 14.45rem',
    tag: 'lg-subtitle-semibold',
    children: 'Disabled Button',
    disabled: true,
  },
};
