import MobileHeader from '@agency/components/Header/MobileHeader';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Header/MobileHeader',
  component: MobileHeader,
  parameters: {
    viewport: {
      defaultViewport: 'iphonex',
    },
  },
} as Meta<typeof MobileHeader>;

const Template: StoryFn<typeof MobileHeader> = (args) => <MobileHeader />;

export const Default = Template.bind({});
Default.args = {};
