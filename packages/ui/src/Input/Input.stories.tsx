import type { Meta, StoryObj } from "@storybook/react";
import Input from "@/Input/Input";

const meta: Meta<typeof Input> = {
  title: "Common/Input",
  component: Input,
  argTypes: {
    title: {
      control: "text",
      description: "Input 상단에 표시할 제목",
    },
    description: {
      control: "text",
      description: "Input 설명 텍스트",
    },
    placeholder: {
      control: "text",
      description: "Input placeholder 값",
    },
    value: {
      control: "text",
      description: "입력된 값",
    },
    onChange: {
      action: "changed",
      description: "값이 변경될 때 호출되는 이벤트 핸들러",
    },
    width: {
      control: "text",
      description: "Input의 너비",
      defaultValue: "100%",
    },
    type: {
      control: { type: "radio" },
      options: ["text", "password"],
      description: "Input의 타입",
    },
    errorMessage: {
      control: "text",
      description: "에러 메시지 (있으면 하단에 표시됨)",
    },
    variant: {
      control: { type: "radio" },
      options: ["pc", "mobile"],
      description: "PC 또는 모바일에 따라 padding 스타일을 조정",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    title: "이메일",
    description: "이메일을 입력하세요",
    placeholder: "example@domain.com",
    value: "",
    onChange: (e) => console.log(e.target.value),
    width: "42rem",
    type: "text",
    errorMessage: "",
    variant: "pc", // 기본값
  },
};

export const WithError: Story = {
  args: {
    title: "비밀번호",
    description: "비밀번호를 입력하세요",
    placeholder: "비밀번호 입력",
    value: "",
    onChange: (e) => console.log(e.target.value),
    width: "42rem",
    type: "password",
    errorMessage: "비밀번호는 최소 8자 이상이어야 합니다.",
    variant: "pc",
  },
};

export const MobileVariant: Story = {
  args: {
    title: "이메일 (모바일)",
    description: "이메일을 입력하세요",
    placeholder: "example@domain.com",
    value: "",
    onChange: (e) => console.log(e.target.value),
    width: "100%",
    type: "text",
    errorMessage: "",
    variant: "mobile",
  },
};
