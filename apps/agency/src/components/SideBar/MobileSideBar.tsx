import {
  mobileSidebarStyle,
  overlayStyle,
  menuListStyle,
  textStyle,
  dividerStyle,
  divider2Style,
  phoneStyle,
  phoneContainerStyle,
} from '@agency/components/SideBar/MobileSideBar.style';
import { IcHome, IcSearch, IcAlarm, UserProfile, IcPhone } from '@seoulmilk/icon';
import { SidebarItem } from '@seoulmilk/ui';
import { Text } from '@seoulmilk/ui';
import { Flex } from '@seoulmilk/ui';
import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileSidebar = ({ isOpen, onClose }: MobileSidebarProps) => {
  const { pathname } = useLocation();
  // 사이드바 열릴 때 body 스크롤 막기
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const menuItems = [
    { to: '/', icon: <IcHome />, label: '홈' },
    { to: '/list', icon: <IcSearch />, label: '자료 조회' },
    { to: '/alarm', icon: <IcAlarm />, label: '알림' },
  ];

  return (
    <>
      {isOpen && <div css={overlayStyle} onClick={onClose} />}
      <aside css={mobileSidebarStyle(isOpen)}>
        <Flex styles={{ align: 'center' }}>
          <UserProfile css={{ width: '3.2rem', height: '3.2rem', borderRadius: '50%' }} />
          <Text
            tag="md2-text-medium"
            css={{
              marginLeft: '0.8rem',
              marginRight: '1.2rem',
            }}>
            a12123
          </Text>
        </Flex>
        <Flex styles={{ gap: '0.8rem', align: 'center' }} css={{ marginTop: '1rem' }}>
          <Text tag="sm-text-regular" css={textStyle}>
            프로필 수정
          </Text>
          <span css={dividerStyle} />
          <Text tag="sm-text-regular" css={textStyle}>
            로그아웃
          </Text>
        </Flex>

        <span css={divider2Style} />

        <ul css={menuListStyle}>
          {menuItems.map(({ to, icon, label }) => (
            <SidebarItem
              key={to}
              to={to}
              icon={icon}
              label={label}
              isActive={pathname === to}
              onClick={() => {
                onClose();
              }}
            />
          ))}
        </ul>

        <Flex styles={{ gap: '0.8rem', align: 'center' }} css={phoneContainerStyle}>
          <IcPhone width={24} height={24} />
          <Text tag="md2-text-medium" css={phoneStyle}>
            본사 문의
          </Text>
        </Flex>
      </aside>
    </>
  );
};

export default MobileSidebar;
