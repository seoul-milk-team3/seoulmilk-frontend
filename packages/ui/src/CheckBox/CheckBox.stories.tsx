import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import CheckBox from "@/CheckBox/CheckBox";

const meta: Meta<typeof CheckBox> = {
  title: "Components/CheckBox",
  component: CheckBox,
  tags: ["autodocs"],
  argTypes: {
    isChecked: { control: "boolean" },
    onChange: { action: "checked" },
  },
};

export default meta;
type Story = StoryObj<typeof CheckBox>;

export const Default: Story = {
  args: {
    isChecked: false,
  },
  render: (args) => {
    const [checked, setChecked] = useState(args.isChecked);
    return (
      <CheckBox
        {...args}
        isChecked={checked}
        onChange={() => setChecked(!checked)}
      />
    );
  },
};

export const Checked: Story = {
  args: {
    isChecked: true,
  },
  render: (args) => {
    const [checked, setChecked] = useState(args.isChecked);
    return (
      <CheckBox
        {...args}
        isChecked={checked}
        onChange={() => setChecked(!checked)}
      />
    );
  },
};

export const Disabled: Story = {
  args: {
    isChecked: false,
  },
};
