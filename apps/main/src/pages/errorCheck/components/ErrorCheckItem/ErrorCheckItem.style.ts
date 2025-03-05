import { css } from '@emotion/react';
import { theme } from '@seoulmilk/styles';

export const titleStyle = css({
  color: theme.colors.grayscale_50,
});

export const inputStyle = css({
  width: '34.4rem',
  height: '5.6rem',
  borderRadius: '8px',
  border: `1px solid ${theme.colors.grayscale_30}`,
  ...theme.text.md2_text_medium,
  padding: '1.6rem 1.9rem',
});

export const textStyle = css({
  backgroundColor: theme.colors.grayscale_15,
  width: '34.4rem',
  height: '5.6rem',
  borderRadius: '8px',
});
