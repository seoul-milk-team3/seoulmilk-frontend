import { Meta, StoryObj } from "@storybook/react";
import ErrorBox, { ErrorBoxProps } from "./ErrorBox";

const meta: Meta<ErrorBoxProps> = {
  title: "Components/ErrorBox",
  component: ErrorBox,
  argTypes: {
    imageUrl: { control: "text" },
    fields: { control: "object" },
    onSave: { action: "saved" },
    onReview: { action: "reviewed" },
  },
};

export default meta;
type Story = StoryObj<ErrorBoxProps>;

export const Default: Story = {
  args: {
    imageUrl: "https://via.placeholder.com/600x400.png?text=Example+Image",
    fields: [
      { label: "사업자번호", value: "123-45-67890", placeholder: "사업자번호 입력" },
      { label: "공급가액", value: "1,000,000", placeholder: "공급가액 입력" },
      { label: "세액", value: "100,000", placeholder: "세액 입력" },
      { label: "사업자번호", value: "123-45-67890", placeholder: "사업자번호 입력" },
      { label: "공급가액", value: "1,000,000", placeholder: "공급가액 입력" },
      { label: "세액", value: "100,000", placeholder: "세액 입력" },
    ],
  },
};
