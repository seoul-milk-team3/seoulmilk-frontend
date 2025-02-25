import { css } from '@emotion/react';
import { colors } from '@/styles/theme';

export const buttonBaseStyle = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  border: 'none',
  borderRadius: '12px',
  transition: 'all 0.2s ease-in-out',

  '&:hover': {
    backgroundColor: colors.green_70,
    color: colors.grayscale_0,
  },

  '&:disabled:not(:focus)': {
    backgroundColor: colors.grayscale_20,
    color: colors.grayscale_60,
    cursor: 'not-allowed',
  },
});

export const buttonVariantStyle = {
  primary: css({
    backgroundColor: colors.green_5,
    color: colors.green_50,
  }),
  secondary: css({
    backgroundColor: colors.green_50,
    color: colors.grayscale_0,
  }),
};
