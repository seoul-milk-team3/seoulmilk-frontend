import { mobileHeaderStyle } from '@agency/components/Header/MobileHeader.style';
import { IcHeaderLogo, IcMenu } from '@seoulmilk/icon';
import { Flex } from '@seoulmilk/ui';
import { useState } from 'react';

const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header css={mobileHeaderStyle}>
        <IcHeaderLogo width={101} height={36} />
        <IcMenu width={24} height={24} />
      </header>
    </>
  );
};

export default MobileHeader;
