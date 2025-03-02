import { css } from '@emotion/react';
import { theme } from '@seoulmilk/styles';

export const tabStyle = (isActive: boolean) =>
  css({
    fontSize: '2.8rem',
    fontWeight: isActive ? '700' : '600',
    color: isActive ? theme.colors.grayscale_90 : theme.colors.grayscale_40,
    cursor: 'pointer',
    position: 'relative',
    paddingBottom: '0.8rem',
    ...(isActive && {
      '&::after': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '3px',
        backgroundColor: theme.colors.grayscale_90,
      },
    }),
  });
