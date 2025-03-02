import { Meta, StoryObj } from "@storybook/react";
import UploadSection from "./UploadSection";

const meta: Meta<typeof UploadSection> = {
  title: "Components/UploadSection",
  component: UploadSection,
  tags: ["autodocs"],
  argTypes: {
    onUploadStart: { action: "Upload started", description: "업로드 시작" },
    onUploadSuccess: { action: "Upload completed", description: "업로드 완료" },
    onCheckValidity: {
      action: "Checking validity",
      description: "진위 여부 확인",
    },
  },
};

export default meta;
type Story = StoryObj<typeof UploadSection>;

export const Default: Story = {
  args: {
    onUploadStart: () => console.log("📂 업로드 시작"),
    onUploadSuccess: () => console.log("✅ 업로드 성공"),
    onCheckValidity: () => console.log("🔍 진위 여부 확인 중"),
  },
};
