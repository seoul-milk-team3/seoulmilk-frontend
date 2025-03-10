import { css } from '@emotion/react';
import { theme } from '@seoulmilk/styles';

export const containerStyle = css({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  gap: '0.8rem',
});

export const labelStyle = css({
  color: theme.colors.grayscale_50,
});

export const inputStyle = css({
  width: '100%',
  padding: '1.6rem 1.9rem',
  border: `1px solid ${theme.colors.grayscale_30}`,
  borderRadius: '8px',
  ...theme.text.md2_text_medium,
});
