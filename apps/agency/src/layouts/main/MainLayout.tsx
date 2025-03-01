import { layoutStyle, containerStyle, contentStyle } from '@agency/layouts/main/MainLayout.style';
import { Header } from '@seoulmilk/ui';
import { Sidebar } from '@seoulmilk/ui';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div css={layoutStyle}>
      <Header variant="agency" />
      <div css={containerStyle}>
        <Sidebar variant="agency" />
        <main css={contentStyle}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
