import { css } from '@emotion/react';
import { theme } from '@seoulmilk/styles';

export const mobileHeaderStyle = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  width: '100%',
  height: '5.4rem',
  padding: '0.9rem 1.6rem',

  backgroundColor: theme.colors.grayscale_0,
  borderBottom: `1px solid ${theme.colors.grayscale_20}`,
});
