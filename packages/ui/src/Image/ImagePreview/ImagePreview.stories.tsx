import { Meta, StoryObj } from "@storybook/react";
import ImagePreview from "@/Image/ImagePreview/ImagePreview";

const meta: Meta<typeof ImagePreview> = {
  title: "Components/ImagePreview",
  component: ImagePreview,
  argTypes: {
    imageUrl: {
      control: "text",
      description: "미리보기 및 확대할 이미지의 URL",
    },
    altText: {
      control: "text",
      description: "이미지의 대체 텍스트 (alt)",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ImagePreview>;

export const Default: Story = {
  args: {
    imageUrl:
      "https://github.com/user-attachments/assets/418a1198-a68a-45cc-b30f-691d723315c5",
    altText: "샘플 이미지",
  },
};
