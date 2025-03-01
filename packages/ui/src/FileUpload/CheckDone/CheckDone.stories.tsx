import { Meta, StoryObj } from "@storybook/react";
import CheckDone from "./CheckDone";

const meta: Meta<typeof CheckDone> = {
  title: "Components/CheckDone",
  component: CheckDone,
  tags: ["autodocs"],
  argTypes: {
    onClose: { action: "closed" },
  },
};

export default meta;

type Story = StoryObj<typeof CheckDone>;

export const Default: Story = {
  args: {},
};
