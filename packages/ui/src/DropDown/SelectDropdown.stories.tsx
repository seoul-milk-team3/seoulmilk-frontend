import { Meta, StoryObj } from "@storybook/react";
import SelectDropdown from "@/DropDown/SelectDropdown";

const meta: Meta<typeof SelectDropdown> = {
  title: "Components/SelectDropdown",
  component: SelectDropdown,
  argTypes: {
    type: {
      control: { type: "radio" },
      options: ["date", "region", "email", "status"],
      description: "드롭다운 타입 (날짜, 지역, 이메일, 상태)",
    },
  },
};

export default meta;
type Story = StoryObj<typeof SelectDropdown>;

export const DateDropdown: Story = {
  args: {
    type: "date",
  },
};

export const RegionDropdown: Story = {
  args: {
    type: "region",
  },
};

export const EmailDropdown: Story = {
  args: {
    type: "email",
  },
};

export const StatusDropdown: Story = {
  args: {
    type: "status",
  },
};

export const TelecomDropdown: Story = {
  args: {
    type: "telecom",
  },
};
