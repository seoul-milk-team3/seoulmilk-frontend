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

export const notificationIconStyle = (variant?: 'primary' | 'secondary') =>
  css({
    width: '2rem',
    height: '2rem',
    filter: variant === 'primary' ? 'none' : 'invert(1)',
  });
