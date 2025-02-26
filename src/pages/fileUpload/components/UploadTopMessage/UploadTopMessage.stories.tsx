import { Meta, StoryFn } from "@storybook/react";
import UploadTopMessage from "./uploadTopMessage";

export default {
  title: "Components/UploadTopMessage",
  component: UploadTopMessage,
  argTypes: {
    title: { control: "text" },
    subTitle: { control: "text" },
  },
} as Meta<typeof UploadTopMessage>;

const Template: StoryFn<typeof UploadTopMessage> = (args) => <UploadTopMessage {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "세금계산서를 업로드해주세요",
  subTitle: "진위여부를 확인 할 세금계산서를 업로드해 주세요",
};

