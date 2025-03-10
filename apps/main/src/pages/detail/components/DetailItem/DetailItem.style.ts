import { css } from '@emotion/react';
import { theme } from '@seoulmilk/styles';

export const titleStyle = css({
  color: theme.colors.grayscale_50,
});

export const textStyle = css({
  backgroundColor: theme.colors.grayscale_0,
  width: '35.6rem',
  height: '5.6rem',
  borderRadius: '8px',
  border: `1px solid ${theme.colors.grayscale_20}`,

  padding: '1.6rem 1.9rem',
});
