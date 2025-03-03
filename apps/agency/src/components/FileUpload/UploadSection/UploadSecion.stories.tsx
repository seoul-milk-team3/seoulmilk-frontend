import { Meta, StoryObj } from "@storybook/react";
import UploadSection from "./UploadSection";

const meta: Meta<typeof UploadSection> = {
  title: "Agency/UploadSection",
  component: UploadSection,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof UploadSection>;

export const Default: Story = {};
