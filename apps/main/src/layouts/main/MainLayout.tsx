import React, { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "@seoulmilk/ui";
import { Sidebar } from "@seoulmilk/ui";
import { layoutStyle, containerStyle, contentStyle } from '@main/layouts/main/MainLayout.style';

interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div css={layoutStyle}>
      <Header variant="main" />
      <div css={containerStyle}>
        <Sidebar variant="main" />
        <main css={contentStyle}>
          {children ?? <Outlet />}  {/* children이 있으면 렌더링, 없으면 Outlet */}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
