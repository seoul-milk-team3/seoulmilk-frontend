import { css } from '@emotion/react';
import { theme } from '@seoulmilk/styles';

export const listItemStyle = css({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  padding: '2rem 2.6rem',
  borderRadius: '12px',
  backgroundColor: theme.colors.grayscale_0,
  justifyContent: 'space-between',

  '&:hover': {
    backgroundColor: theme.colors.grayscale_15,
  },
});

export const labelTextStyle = css({
  color: theme.colors.main,
});

export const labelBackgroundStyle = css({
  width: '7.7rem',
  height: '4rem',
  backgroundColor: '#FEEFEF',
  borderRadius: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const errorButtonStyle = css({
  color: theme.colors.main,
  fontWeight: 'bold',
  cursor: 'pointer',
  marginRight: '2.7rem',
});
