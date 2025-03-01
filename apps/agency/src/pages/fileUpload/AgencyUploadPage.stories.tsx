import React from "react";
import { Meta, Story } from "@storybook/react";
import { MemoryRouter } from "react-router-dom"; // 추가
import AgencyUploadPage from "./AgencyUploadPage";

export default {
  title: "Pages/AgencyUploadPage",
  component: AgencyUploadPage,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/"]}>
        <Story />
      </MemoryRouter>
    ),
  ],
} as Meta;

const Template: Story = (args) => <AgencyUploadPage {...args} />;

export const Default = Template.bind({});
