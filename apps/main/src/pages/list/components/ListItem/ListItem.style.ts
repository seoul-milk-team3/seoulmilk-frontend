import { css } from '@emotion/react';
import { theme } from '@seoulmilk/styles';

export const listItemStyle = css({
  alignItems: 'center',
  width: '100%',
  justifyContent: 'space-between',
  padding: '1rem 2.6rem',
  backgroundColor: theme.colors.grayscale_0,
  borderRadius: '12px',
  cursor: 'pointer',
  '&:hover': { backgroundColor: theme.colors.grayscale_15 },
});

export const text1Style = css({
  color: theme.colors.green_90,
  width: '15.6rem',
  textAlign: 'left',
});

export const text2Style = css({
  color: theme.colors.green_90,
  width: '15.5rem',
  paddingRight: '2.6rem',
  textOverflow: 'ellipsis',
});
