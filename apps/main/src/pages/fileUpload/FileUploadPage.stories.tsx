import React from "react";
import { Meta, Story } from "@storybook/react";
import { MemoryRouter } from "react-router-dom"; // 추가
import FileUploadPage from "./FileUploadPage";

export default {
  title: "Pages/FileUploadPage",
  component: FileUploadPage,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/"]}>
        <Story />
      </MemoryRouter>
    ),
  ],
} as Meta;

const Template: Story = (args) => <FileUploadPage {...args} />;

export const Default = Template.bind({});
