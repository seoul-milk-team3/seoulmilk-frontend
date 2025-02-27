import Header from "@/Header/Header";
import Sidebar from "@/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import {
  layoutStyle,
  containerStyle,
  contentStyle,
} from "@/Layout/main/MainLayout.style";

const MainLayout = () => {
  return (
    <div css={layoutStyle}>
      <Header variant="secondary" />
      <div css={containerStyle}>
        <Sidebar />
        <main css={contentStyle}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
