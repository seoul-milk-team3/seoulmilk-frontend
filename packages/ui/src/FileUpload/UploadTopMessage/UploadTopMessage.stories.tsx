import { Meta, StoryObj } from "@storybook/react";
import UploadTopMessage from "@/FileUpload/UploadTopMessage/UploadTopMessage";

const meta: Meta<typeof UploadTopMessage> = {
  title: "Components/UploadTopMessage",
  component: UploadTopMessage,
  argTypes: {
    title: { control: "text" },
    subTitle: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<typeof UploadTopMessage>;

export const Default: Story = {
  args: {
    title: "세금계산서를 업로드해주세요",
    subTitle: "진위여부를 확인 할 세금계산서를 업로드해 주세요",
  },
};
