import type { Meta, StoryObj } from "@storybook/react";
import MobileUploadSection from "../components/FileUpload/MobileUploadSection/MobileUploadSection";

const meta: Meta<typeof MobileUploadSection> = {
  title: "Components/UploadSection/MobileUploadSection",
  component: MobileUploadSection,
  parameters: {
    layout: "centered",
    viewport: {
      defaultViewport: 'iphonex',
    },
  },
};

export default meta;

type Story = StoryObj<typeof MobileUploadSection>;

export const Default: Story = {};
