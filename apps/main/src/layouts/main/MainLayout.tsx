import { Header } from '@seoulmilk/ui';
import { Sidebar } from '@seoulmilk/ui';
import { Outlet } from 'react-router-dom';
import { layoutStyle, containerStyle, contentStyle } from '@/layouts/main/MainLayout.style';

const MainLayout = () => {
  return (
    <div css={layoutStyle}>
      <Header variant="secondary" />
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
