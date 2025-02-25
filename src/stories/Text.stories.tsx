import type { Meta, StoryObj } from '@storybook/react';
import Flex from '@/components/Flex/Flex';
import Text from '@/components/Text/Text';
import { TextTag } from '@/types/textTyes';

const meta = {
  title: 'Common/Text',
  component: Text,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '다양한 크기와 스타일을 제공하는 공통 텍스트 컴포넌트입니다.',
      },
    },
  },
  tags: ['autodocs'],
  args: {
    children: 'Sample Text',
    tag: 'md1-text-regular',
  },
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
      description: '텍스트 내용',
      table: {
        category: 'Props',
        type: { summary: 'string' },
        defaultValue: { summary: 'Sample Text' },
      },
    },
    tag: {
      control: {
        type: 'radio',
        options: [
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
        ] as TextTag[],
      },
      description: '적용할 텍스트 스타일 (폰트 크기 및 굵기 설정)',
      table: {
        category: 'Props',
        type: { summary: 'TextTag' },
        defaultValue: { summary: 'md1-text-regular' },
      },
    },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

/** 기본적으로 사용될 Text 컴포넌트 */
export const Default: Story = {
  args: {
    tag: 'md1-text-regular',
  },
};

/** 모든 Text 스타일을 한 번에 확인 */
export const AllVariants: Story = {
  render: () => (
    <Flex styles={{ direction: 'column', gap: '1rem' }}>
      {[
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
      ].map((tag) => (
        <li key={tag}>
          <Text tag={tag as TextTag}>{tag}</Text>
        </li>
      ))}
    </Flex>
  ),
};
