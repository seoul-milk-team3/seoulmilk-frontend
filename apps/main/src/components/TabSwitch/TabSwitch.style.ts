import { css } from '@emotion/react';
import { theme } from '@seoulmilk/styles';

export const tabContainerStyle = css({
  display: 'flex',
  background: theme.colors.grayscale_20,
  borderRadius: '8px',
  padding: '0.8rem',
  width: '42rem',
  height: '6.4rem',
});

export const tabStyle = css({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  background: 'transparent',
  ...theme.text.md2_text_medium,
  cursor: 'pointer',
  color: theme.colors.grayscale_50,
});

export const activeTabStyle = css({
  background: theme.colors.green_50,
  color: theme.colors.grayscale_0,
  ...theme.text.md2_text_semibold,
  borderRadius: '8px',
});
