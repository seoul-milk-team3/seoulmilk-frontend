import { css } from '@emotion/react';
import { theme } from '@seoulmilk/styles';

export const invoiceDetailsWrapper = css({
  width: '100%',
  display: 'flex',
  alignItems: 'flex-start',
  gap: '3.8rem',
});

export const invoiceDetailsInfo = css({
  width: '100%',
  display: 'flex',
  padding: '3.2rem',
  backgroundColor: theme.colors.grayscale_5,
  borderRadius: '12px',
  flex: 1,
  gap: '3.4rem',
});

export const textStyle = css({
  color: theme.colors.grayscale_50,
});

export const text1Style = css({
  color: theme.colors.green_60,
});
