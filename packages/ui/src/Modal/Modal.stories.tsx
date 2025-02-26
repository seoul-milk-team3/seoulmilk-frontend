import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Modal from '@/Modal/Modal';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    title: { control: 'text' },
    message: { control: 'text' },
    leftButtonText: { control: 'text' },
    rightButtonText: { control: 'text' },
    onLeftButtonClick: { action: 'Left button clicked' },
    onRightButtonClick: { action: 'Right button clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
      <>
        {isOpen && (
          <Modal
            {...args}
            onLeftButtonClick={() => {
              args.onLeftButtonClick();
              setIsOpen(false);
            }}
            onRightButtonClick={() => {
              args.onRightButtonClick();
              setIsOpen(false);
            }}
          />
        )}
      </>
    );
  },
  args: {
    title: '로그아웃',
    message: '로그아웃 하시겠습니까?',
    leftButtonText: '아니요',
    rightButtonText: '예',
  },
};
