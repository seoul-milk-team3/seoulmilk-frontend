import UploadSection from '../../pages/fileUpload/components/UploadSection/UploadSection';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof UploadSection> = {
  title: 'Components/UploadSection',
  component: UploadSection,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof UploadSection>;

export const Default: Story = {
  render: () => <UploadSection />,
};
