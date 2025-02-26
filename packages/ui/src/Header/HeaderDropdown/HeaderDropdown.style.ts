import { css } from '@emotion/react';
import { colors } from '@seoulmilk/styles';

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

export const rightSectionStyle = (variant?: 'primary' | 'secondary') =>
  css({
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
  color: ${variant === 'primary' ? colors.grayscale_90 : colors.grayscale_0};

  margin-top: 1rem;
  margin-left: 0.2rem;
`;

export const profileImageStyle = css({
  width: '3.2rem',
  height: '3.2rem',
  borderRadius: '50%',
});

export const notificationIconStyle = (variant?: 'primary' | 'secondary') =>
  css({
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

  color: 'grayscale_70',
  fontSize: '1.6rem',
  textAlign: 'center',

  cursor: 'pointer',
  transition: 'background-color 0.2s ease-in-out',

  '&:hover': {
    backgroundColor: colors.grayscale_20,
  },
});
