import { css } from '@emotion/react';
import { theme } from '@seoulmilk/styles';

export const listItemStyle = css({
  justifyContent: 'space-between',
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
