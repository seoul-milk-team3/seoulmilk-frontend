import { Meta, StoryFn } from "@storybook/react";
import ErrorTextBox, { ErrorTextBoxProps } from "../components/ErrorCheck/MobileErrorTextBox/MobileErrorTextBox";

const meta: Meta<ErrorTextBoxProps> = {
  title: "Components/ErrorTextBox/MobileErrorTextBox",
  component: ErrorTextBox,
  argTypes: {
    label: { control: "text" },
    value: { control: "text" },
    placeholder: { control: "text" },
  },
  parameters: {
    layout: "centered",
    viewport: {
      defaultViewport: 'iphonex',
    },
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