import { Meta, StoryObj } from "@storybook/react";
import ErrorBox, { ErrorBoxProps } from "./ErrorBox";

const meta: Meta<ErrorBoxProps> = {
  title: "Components/ErrorBox",
  component: ErrorBox,
  argTypes: {
    images: { control: "array" }, // 여러 개의 이미지 URL을 배열로 전달
  },
};

export default meta;
type Story = StoryObj<ErrorBoxProps>;

export const Default: Story = {
  args: {
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150/0000FF",
      "https://via.placeholder.com/150/FF0000",
      "https://via.placeholder.com/150/00FF00",
    ], // 샘플 이미지 4개
  },
};
