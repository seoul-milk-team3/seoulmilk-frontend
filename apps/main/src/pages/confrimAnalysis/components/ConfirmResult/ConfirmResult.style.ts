import { css } from '@emotion/react';
import { theme } from '@seoulmilk/styles';

export const textColor = css({
  color: theme.colors.main,
});

export const fileStyle = css({
  color: theme.colors.grayscale_50,
  marginTop: '1rem',
});

export const borderStyle = css({
  border: `1px solid ${theme.colors.grayscale_20}`,
  borderRadius: '20px',
  width: '92.3rem',
  height: '53.6rem',
});

export const dividerStyle = css({
  backgroundColor: theme.colors.grayscale_30,
  marginTop: '2.9rem',
  marginBottom: '2.9rem',
  width: '32.3rem',
  height: '1px',
});
