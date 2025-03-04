import type { Meta, StoryObj } from "@storybook/react";
import CheckDone from "@/CheckDone/CheckDone";

const meta: Meta<typeof CheckDone> = {
  title: "Components/CheckDone",
  component: CheckDone,
  tags: ["autodocs"],
  argTypes: {
    isNormal: {
      control: "boolean",
      description: "분석 결과 (정상 여부)",
    },
    onClose: { action: "close clicked", description: "확인 버튼 클릭" },
    onErrorClick: {
      action: "error details clicked",
      description: "오류 내역 확인 버튼 클릭",
    },
  },
};

export default meta;
type Story = StoryObj<typeof CheckDone>;

export const Normal: Story = {
  args: {
    isNormal: true,
  },
};

export const Abnormal: Story = {
  args: {
    isNormal: false,
  },
};
