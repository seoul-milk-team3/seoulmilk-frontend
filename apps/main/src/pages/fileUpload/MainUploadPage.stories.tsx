import React from "react";
import { Meta, Story } from "@storybook/react";
import { MemoryRouter } from "react-router-dom"; // 추가
import MainUploadPage from "./MainUploadPage";

export default {
  title: "Pages/MainUploadPage",
  component: MainUploadPage,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/"]}>
        <Story />
      </MemoryRouter>
    ),
  ],
} as Meta;

const Template: Story = (args) => <MainUploadPage {...args} />;

export const Default = Template.bind({});
