import { Meta, StoryObj } from "@storybook/react";
import ErrorBox, { ErrorBoxProps } from "../components/ErrorCheck/MobileErrorBox/MobileErrorBox";

const meta: Meta<ErrorBoxProps> = {
  title: "Components/ErrorBox/MobileErrorBox",
  component: ErrorBox,
  parameters: {
    viewport: {
      defaultViewport: 'iphonex',
    },
    layout: "fullscreen", // 전체 화면에서 테스트 가능하도록 설정
  },
  argTypes: {
    images: {
      control: "array",
      description: "OCR 인식된 세금계산서 이미지 목록",
      table: { category: "Content" },
    },
  },
};

export default meta;
type Story = StoryObj<ErrorBoxProps>;

export const Default: Story = {
  args: {
    images: [
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300/0000FF",
      "https://via.placeholder.com/300/FF0000",
      "https://via.placeholder.com/300/00FF00",
    ], // 샘플 이미지 4개 (크기 조정)
  },
};
