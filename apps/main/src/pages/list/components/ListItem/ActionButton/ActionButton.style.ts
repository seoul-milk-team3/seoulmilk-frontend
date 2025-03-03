import { css } from '@emotion/react';
import { theme } from '@seoulmilk/styles';

export const buttonStyle = (isError: boolean) =>
  css({
    color: isError ? '#E26200' : theme.colors.grayscale_90,
    background: 'none',
  });
