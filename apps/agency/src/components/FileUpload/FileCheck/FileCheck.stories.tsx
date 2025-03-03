import { Meta, StoryObj } from "@storybook/react";
import FileCheck, { FileCheckProps } from "./FileCheck";

const meta: Meta<FileCheckProps> = {
  title: "Agency/FileCheck",
  component: FileCheck,
  argTypes: {
    checkFiles: { action: "checkFiles" },
    onComplete: { action: "onComplete" },
  },
};

export default meta;
type Story = StoryObj<FileCheckProps>;

export const Default: Story = {
  args: {
    checkFiles: async () => new Promise((resolve) => setTimeout(resolve, 3000)), // 3초 딜레이
    onComplete: () => {},
  },
};

export const Loaded: Story = {
  args: {
    checkFiles: async () => {}, // 즉시 완료
    onComplete: () => {},
  },
};
