import { css } from '@emotion/react';
import { colors } from '@/styles/theme';

export const headerBaseStyle = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',

  width: '100%',
  maxWidth: '144rem',
  height: '7rem',
  padding: '1.6rem 4.8rem',
  boxSizing: 'border-box',
});

export const rightSectionStyle = (variant?: 'primary' | 'secondary') => css({
  display: 'flex',
  alignItems: 'center',
  gap: '1.6rem',

  fontSize: '1.3rem',
  color: variant === 'primary' ? 'grayscale_90' : 'grayscale_0',
  marginLeft: 'auto',
});

export const headerVariantStyle = {
  primary: css({
    backgroundColor: colors.grayscale_0,
  }),
  secondary: css({
    backgroundColor: colors.green_50,
    borderBottom: 'none',
  }),
};

export const logoTextStyle = (variant?: 'primary' | 'secondary') => css`
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  flex-shrink: 0;

  font-family: 'Seoulmilk_font', sans-serif;
  font-size: 1.8rem;
  font-weight: bold;
  color: variant === 'primary' ? 'grayscale_90' : 'grayscale_0',

  margin-top: 1rem;
  margin-left: 0.2rem;
`;

export const profileImageStyle = css({
  width: '3.2rem',
  height: '3.2rem',
  borderRadius: '50%',
});

export const notificationIconStyle = (variant?: 'primary' | 'secondary') => css({
  width: '2rem',
  height: '2rem',
  filter: variant === 'primary' ? 'none' : 'invert(1)',
});

export const dropdownMenuStyle = css({
  display: 'flex',
  flexDirection: 'column',
  visibility: 'visible',
  overflow: 'hidden',

  position: 'absolute',
  top: '5rem',
  right: '0rem',
  zIndex: 1000,

  width: '16.8rem',
  height: '11.2rem',
  paddingTop: '1rem',
  borderRadius: '1.2rem',

  backgroundColor: 'grayscale_0',
  boxShadow: '0.4rem 0.4rem 0.8rem 0rem #9797972E',
});

export const dropdownItemStyle = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '16.8rem',
  height: '5.6rem',
  padding: '1.2rem 1.6rem',

  color: '#404040',
  fontSize: '1.6rem',
  textAlign: 'center',

  cursor: 'pointer',
  transition: 'background-color 0.2s ease-in-out',

  '&:hover': {
    backgroundColor: colors.grayscale_70,
  },
});

export const modalOverlayStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;

  background: rgba(0, 0, 0, 0.5);
`;

export const modalStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 41.8rem;
  height: 17.8rem;
  margin: 0 auto;
  padding: 2.4rem;

  border-radius: 1.6rem;

  background: ${colors.grayscale_0};
`;

export const titleStyle = css`
  font-size: 2rem;
  font-weight: 700;
  color: ${colors.grayscale_90};

  margin-top: 0.5rem;
  margin-bottom: 0.3rem;
`;

export const messageStyle = css`
  font-size: 1.6rem;
  font-weight: 400;
  color: ${colors.grayscale_40};
  text-align: center;

  margin-bottom: 1rem;
`;

export const buttonContainerStyle = css`
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  width: 100%;
`;

export const buttonStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  width: 17.7rem !important;
  height: 4.4rem !important;
  padding: 0 !important;
`;
