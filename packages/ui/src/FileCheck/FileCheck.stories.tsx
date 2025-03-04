import type { Meta, StoryObj } from "@storybook/react";
import FileCheck, { FileCheckProps } from "@/FileCheck/FileCheck";

const meta: Meta<typeof FileCheck> = {
  title: "Components/FileCheck",
  component: FileCheck,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "radio",
      options: ["primary", "secondary"],
      description:
        "파일 체크 상태 (primary: 업로드 중, secondary: 진위 여부 분석 중)",
    },
    onComplete: {
      action: "Complete triggered",
      description: "파일 체크 완료 시 실행",
    },
    onCancel: {
      action: "Cancel clicked",
      description: "업로드 취소 버튼 클릭 시 실행",
    },
  },
};

export default meta;
type Story = StoryObj<typeof FileCheck>;

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const Primary: Story = {
  args: {
    variant: "primary",
    checkFiles: async () => {
      await delay(3000); // 3초 동안 로딩 상태 유지 (업로드 중)
    },
    onComplete: () => {
      console.log("파일 업로드 완료!");
    },
    onCancel: () => {
      console.log("업로드 취소됨");
    },
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    checkFiles: async () => {
      await delay(5000); // 5초 동안 로딩 상태 유지 (진위여부 분석 중)
    },
    onComplete: () => {
      console.log("파일 분석 완료!");
    },
  },
};
