import { css } from '@emotion/react';
import { theme } from '@seoulmilk/styles';

export const statusChipStyles = (status: 'PAID_YET' | 'PAID' | 'ABNORMAL') =>
  css({
    width: '7.7rem',
    height: '4rem',
    borderRadius: '12px',
    cursor: 'pointer',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: {
      PAID_YET: theme.colors.grayscale_20,
      PAID: theme.colors.green_5,
      ABNORMAL: '#FEEFEF',
    }[status],
    color: {
      PAID_YET: theme.colors.grayscale_80,
      PAID: theme.colors.green_60,
      ABNORMAL: '#DA1414',
    }[status],
  });
