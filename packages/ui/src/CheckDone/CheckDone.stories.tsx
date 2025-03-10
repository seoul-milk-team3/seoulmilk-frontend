import type { Meta, StoryObj } from "@storybook/react";
import CheckDone from "@/CheckDone/CheckDone";
import { MemoryRouter } from "react-router-dom"; // ✅ MemoryRouter 추가

const meta: Meta<typeof CheckDone> = {
  title: "Components/CheckDone",
  component: CheckDone,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  argTypes: {
    variant: {
      control: "radio",
      options: ["primary", "secondary"],
      description: "CheckDone 컴포넌트의 변형 타입",
    },
    isNormal: {
      control: "boolean",
      description: "분석 결과 (정상 여부) - primary variant에서만 사용",
    },
    onClose: { action: "close clicked", description: "확인 버튼 클릭" },
    onErrorClick: {
      action: "error details clicked",
      description:
        "오류 내역 확인 버튼 클릭 (비정상일 경우) - primary variant에서만 사용",
    },
  },
};

export default meta;
type Story = StoryObj<typeof CheckDone>;

export const PrimaryNormal: Story = {
  args: {
    variant: "primary",
    isNormal: true,
  },
};

export const PrimaryAbnormal: Story = {
  args: {
    variant: "primary",
    isNormal: false,
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};
