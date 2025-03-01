import { css } from '@emotion/react';
import { theme } from '@seoulmilk/styles';

export const layoutStyle = css({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
});

export const containerStyle = css({
  display: 'flex',
  flex: 1,
  overflow: 'hidden',
});

export const contentStyle = css({
  flex: 1,
  padding: '2rem',
  overflowY: 'auto',
  backgroundColor: theme.colors.grayscale_0,
});
