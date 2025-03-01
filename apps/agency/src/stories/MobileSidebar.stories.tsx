import MobileSidebar from '@agency/components/SideBar/MobileSideBar';
import useSidebar from '@agency/hooks/useSidebar';
import { Global, css } from '@emotion/react';
import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'Components/MobileSidebar',
  component: MobileSidebar,
  parameters: {
    viewport: {
      defaultViewport: 'iphonex',
    },
  },
} as Meta;

const Template: StoryFn = () => {
  const { isOpen, openSidebar, closeSidebar } = useSidebar(); // ✅ 사이드바 상태 관리

  return (
    <BrowserRouter>
      <button onClick={openSidebar}>사이드바 열기</button>
      <MobileSidebar isOpen={isOpen} onClose={closeSidebar} />
    </BrowserRouter>
  );
};

export const Default = Template.bind({});
