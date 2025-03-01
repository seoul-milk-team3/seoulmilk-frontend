import { mobileHeaderStyle } from '@agency/components/Header/MobileHeader.style';
import { IcHeaderLogo, IcMenu } from '@seoulmilk/icon';
import { Flex } from '@seoulmilk/ui';

interface MobileHeaderProps {
  openSidebar: () => void; // ✅ openSidebar를 props로 받음
}

const MobileHeader = ({ openSidebar }: MobileHeaderProps) => {
  return (
    <>
      <header css={mobileHeaderStyle}>
        <IcHeaderLogo width={101} height={36} />
        <IcMenu width={24} height={24} onClick={openSidebar} />
      </header>
    </>
  );
};

export default MobileHeader;
