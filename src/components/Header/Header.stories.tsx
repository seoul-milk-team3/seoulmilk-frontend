import React from 'react';
import { Meta, Story } from '@storybook/react';
import Header, { HeaderProps } from './Header';

export default {
  title: 'Components/Header',
  component: Header,
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
    },
  },
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: 'primary',
};

export const GreenBackground = Template.bind({});
GreenBackground.args = {
  variant: 'secondary',
};
