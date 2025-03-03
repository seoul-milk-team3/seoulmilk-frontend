import TabSwitch from '@main/components/TabSwitch/TabSwitch';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

const meta: Meta<typeof TabSwitch> = {
  title: 'Common/TabSwitch',
  component: TabSwitch,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

type Story = StoryObj<typeof TabSwitch>;

const Template = () => {
  const [activeTab, setActiveTab] = useState<'admin' | 'user'>('admin');

  return <TabSwitch activeTab={activeTab} onChange={setActiveTab} />;
};

export const Default: Story = {
  render: Template,
};
