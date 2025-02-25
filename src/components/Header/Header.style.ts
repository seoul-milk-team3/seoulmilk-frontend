import { css } from '@emotion/react';

export const fontFace = css`
  @font-face {
    font-family: 'Seoulmilk_font';
    src: url('/font/Seoulmilk_font.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }
`;

export const headerBaseStyle = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  position: 'relative',

  width: '100%',
  maxWidth: '1440px',
  height: '70px',
  padding: '16px 48px',
  boxSizing: 'border-box',
});

export const rightSectionStyle = (variant?: 'primary' | 'secondary') => css({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',

  fontSize: '14px',
  color: variant === 'primary' ? '#333' : 'white',

  marginLeft: 'auto',
});

export const headerVariantStyle = {
  primary: css({
    backgroundColor: 'white',
  }),
  secondary: css({
    backgroundColor: '#009857',
    borderBottom: 'none',
  }),
};

export const logoTextStyle = (variant?: 'primary' | 'secondary') => css`
  ${fontFace}

  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  flex-shrink: 0;

  font-family: 'Seoulmilk_font', sans-serif;
  font-size: 18px;
  font-weight: bold;
  color: ${variant === 'primary' ? '#333' : 'white'};

  margin-top: 9px;
`;

export const profileImageStyle = css({
  width: '32px',
  height: '32px',
  borderRadius: '50%',
});

export const notificationIconStyle = (variant?: 'primary' | 'secondary') => css({
  width: '20px',
  height: '20px',
  filter: variant === 'primary' ? 'none' : 'invert(1)',
});
