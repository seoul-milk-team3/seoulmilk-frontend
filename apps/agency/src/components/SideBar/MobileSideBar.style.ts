import { css } from '@emotion/react';
import { theme } from '@seoulmilk/styles';

// 전체 사이드바 컨테이너
export const mobileSidebarStyle = (isOpen: boolean) =>
  css({
    position: 'fixed',
    top: 0,
    right: isOpen ? 0 : '-23.2rem',
    width: '23.2rem',
    height: '100vh',
    backgroundColor: theme.colors.grayscale_0,

    display: 'flex',
    flexDirection: 'column',
    padding: '2.8rem 2.4rem 4.3rem 2.4rem ',
    transition: 'right 0.3s ease-in-out',
    zIndex: 3,
  });

// 메뉴 리스트 스타일
export const menuListStyle = css({
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '1.6rem',
});

export const overlayStyle = css({
  position: 'fixed',
  top: 0,
  right: 0,
  width: '100%',
  height: '100vh',
  background: 'rgba(0, 0, 0, 0.2)',
  zIndex: 2,
});

export const textStyle = css({
  color: theme.colors.grayscale_40,
});

export const dividerStyle = css({
  width: '1px',
  height: '16px',
  backgroundColor: theme.colors.grayscale_40,
});

export const divider2Style = css({
  width: '100%',
  height: '1px',
  backgroundColor: theme.colors.grayscale_20,
  margin: '2rem 0',
});

export const phoneStyle = css({
  textDecorationLine: 'underline',
  color: theme.colors.grayscale_60,
  cursor: 'pointer',
});

export const phoneContainerStyle = css({
  width: '100%',
  justifyContent: 'center',
  position: 'absolute',
  bottom: '4.3rem',
  left: 0,
});
