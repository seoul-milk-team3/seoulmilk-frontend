import { layoutStyle, containerStyle, contentStyle } from '@main/layouts/main/MainLayout.style';
import { Header } from '@seoulmilk/ui';
import { Sidebar } from '@seoulmilk/ui';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div css={layoutStyle}>
      <Header variant="main" />
      <div css={containerStyle}>
        <Sidebar variant="main" />
        <main css={contentStyle}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
