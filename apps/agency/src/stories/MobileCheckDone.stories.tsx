import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import MobileCheckDone from "../components/FileUpload/MobileCheckDone/MobileCheckDone";

export default {
  title: "Components/CheckDone/MobileCheckDone",
  parameters: {
    layout: "centered",
    viewport: {
      defaultViewport: 'iphonex',
    },
  },
  component: MobileCheckDone,
} as Meta<typeof MobileCheckDone>;

const Template: StoryFn<typeof MobileCheckDone> = (args) => <MobileCheckDone />;

export const Default = Template.bind({});
Default.args = {};
