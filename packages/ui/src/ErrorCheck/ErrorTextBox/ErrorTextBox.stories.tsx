import { Meta, StoryFn } from "@storybook/react";
import ErrorTextBox, { ErrorTextBoxProps } from "./ErrorTextBox";

const meta: Meta<ErrorTextBoxProps> = {
  title: "Components/ErrorTextBox",
  component: ErrorTextBox,
  argTypes: {
    label: { control: "text" },
    value: { control: "text" },
    placeholder: { control: "text" },
  },
};

export default meta;

const Template: StoryFn<ErrorTextBoxProps> = (args) => <ErrorTextBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "공급자 사업자등록번호",
  value: "213-82-00250",
  placeholder: "사업자등록번호 입력",
};