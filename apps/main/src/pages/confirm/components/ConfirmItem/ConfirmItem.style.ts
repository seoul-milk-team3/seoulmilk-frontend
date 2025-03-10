import { css } from '@emotion/react';
import { theme } from '@seoulmilk/styles';

export const listItemStyle = css({
  alignItems: 'center',
  width: '100%',
  padding: '2rem 2.6rem',
  borderRadius: '12px',
  backgroundColor: theme.colors.grayscale_0,

  '&:hover': {
    backgroundColor: theme.colors.grayscale_15,
  },
});

export const confirmTextStyle = css({
  color: '#FF6C56',
});

export const labelTextStyle = css({
  color: theme.colors.grayscale_60,
});

export const labelBackgroundStyle = css({
  width: '7.7rem',
  height: '4rem',
  backgroundColor: theme.colors.grayscale_20,
  borderRadius: '10px',
});
