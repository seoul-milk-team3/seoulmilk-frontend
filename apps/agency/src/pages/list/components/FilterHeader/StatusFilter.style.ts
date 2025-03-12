import { css } from '@emotion/react';
import { theme } from '@seoulmilk/styles';

export const statusFilterWrapper = css({
  display: 'flex',
  alignItems: 'center',
  gap: '1.2rem',
});

export const statusButton = (selected: boolean) =>
  css({
    width: '12rem',
    height: '4.8rem',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '12px',
    border: `1px solid ${theme.colors.grayscale_40}`,
    cursor: 'pointer',
    backgroundColor: selected ? theme.colors.grayscale_60 : theme.colors.grayscale_10,
    color: selected ? theme.colors.grayscale_0 : theme.colors.grayscale_40,
    '&:hover': {
      backgroundColor: theme.colors.grayscale_30,
      color: theme.colors.grayscale_50,
    },
  });
