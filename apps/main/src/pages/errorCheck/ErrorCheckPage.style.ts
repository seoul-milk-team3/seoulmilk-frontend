import { css } from '@emotion/react';
import { theme } from '@seoulmilk/styles';

export const detailContainerStyle = css({
  display: 'flex',
  height: '100%',
  overflow: 'hidden',
});

export const detailListWrapperStyle = css({
  backgroundColor: theme.colors.grayscale_0,
  //padding: '4rem 6.5rem',
  display: 'flex',
  flexDirection: 'column',
  maxHeight: '100%',
  overflowY: 'auto',
});

export const buttonContainerStyle = css({
  flexShrink: 0,
  position: 'sticky',
  bottom: '0',
  background: theme.colors.grayscale_0,
  padding: '2.6rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderTop: `1px solid ${theme.colors.grayscale_20}`,
  width: '100%',
  gap: '1.2rem',
});

export const detailListStyle = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  maxHeight: '100%',
  //overflowY: 'auto',
  padding: '4rem 6.5rem',
  gap: '3.8rem',
  width: '100%',
});
