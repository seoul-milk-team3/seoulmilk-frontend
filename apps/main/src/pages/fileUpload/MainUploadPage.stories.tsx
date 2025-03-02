import React from "react";
import { Meta, Story } from "@storybook/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import MainUploadPage from "./MainUploadPage";

export default {
  title: "Pages/MainUploadPage",
  component: MainUploadPage,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/file-upload"]}>
        <Routes>
          <Route path="/file-upload" element={<Story />} />
        </Routes>
      </MemoryRouter>
    ),
  ],
} as Meta;

const Template: Story = (args) => <MainUploadPage {...args} />;

export const Default = Template.bind({});
Default.args = {};
