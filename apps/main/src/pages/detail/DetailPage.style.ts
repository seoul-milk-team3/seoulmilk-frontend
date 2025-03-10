import { css } from '@emotion/react';
import { theme } from '@seoulmilk/styles';

export const detailContainerStyle = css({
  display: 'flex',
  height: '100%',
  overflow: 'hidden',
});

export const detailListWrapperStyle = css({
  backgroundColor: theme.colors.grayscale_0,
  height: 'calc(100vh - 12rem)',
  paddingBottom: '4rem',
});

export const detailListStyle = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  alignItems: 'center',
  maxHeight: '100%',
  overflowY: 'auto',
  padding: '4rem 6.5rem',
});

export const buttonContainerStyle = css({
  flexShrink: 0,
  position: 'sticky',
  bottom: '0',
  background: theme.colors.grayscale_0,
  padding: '1.6rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderTop: `1px solid ${theme.colors.grayscale_20}`,
  width: '100%',
});
