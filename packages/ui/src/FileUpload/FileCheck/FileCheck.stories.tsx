import { ComponentMeta, ComponentStory } from "@storybook/react";
import FileCheck from "./FileCheck";

export default {
  title: "Components/FileCheck",
  component: FileCheck,
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["primary", "secondary"],
    },
    onComplete: { action: "completed" },
    checkFiles: { action: "checking files" },
    onCancel: { action: "canceled" },
  },
} as ComponentMeta<typeof FileCheck>;

const Template: ComponentStory<typeof FileCheck> = (args) => <FileCheck {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  checkFiles: async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000000000));
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  checkFiles: async () => {
    await new Promise((resolve) => setTimeout(resolve, 20000000));
  },
};