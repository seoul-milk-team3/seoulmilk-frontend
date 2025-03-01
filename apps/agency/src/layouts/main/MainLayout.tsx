import MobileHeader from '@agency/components/Header/MobileHeader';
import MobileSidebar from '@agency/components/SideBar/MobileSideBar';
import useSidebar from '@agency/hooks/useSidebar';
import { layoutStyle, containerStyle, contentStyle } from '@agency/layouts/main/MainLayout.style';
import { Header } from '@seoulmilk/ui';
import { Sidebar } from '@seoulmilk/ui';
import useMediaQuery from '@seoulmilk/utils/src/hooks/useMediaQuery';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const { isOpen, openSidebar, closeSidebar } = useSidebar();

  return (
    <div css={layoutStyle}>
      {isMobile ? <MobileHeader openSidebar={openSidebar} /> : <Header variant="agency" />}
      <div css={containerStyle}>
        {!isMobile && <Sidebar variant="agency" />}
        <main css={contentStyle}>
          <Outlet />
        </main>
      </div>
      {isMobile && <MobileSidebar isOpen={isOpen} onClose={closeSidebar} />}
    </div>
  );
};

export default MainLayout;
