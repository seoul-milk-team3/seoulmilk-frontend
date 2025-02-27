import { Meta, StoryObj } from "@storybook/react";
import FileCheck from "./FileCheck";

const meta: Meta<typeof FileCheck> = {
  title: "Components/FileCheck",
  component: FileCheck,
  argTypes: {
    onComplete: { action: "onComplete" },
    checkFiles: { action: "checkFiles" },
  },
};

export default meta;

type Story = StoryObj<typeof FileCheck>;

export const Default: Story = {
  args: {
    onComplete: () => console.log("진위여부 확인 완료"),
    checkFiles: async () => {
      console.log("파일 검사 요청 중...");
      await new Promise((resolve) => setTimeout(resolve, 1000000000)); // 3초 대기 (로딩 시뮬레이션)
      console.log("파일 검사 완료!");
    },
  },
};
