import { css } from '@emotion/react';
import { theme } from '@seoulmilk/styles';

export const containerStyle = css({
  border: `3px dashed ${theme.colors.grayscale_30}`,
  borderRadius: '20px',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  marginTop: '2.2rem',
  padding: '6.4rem 8.5rem',
});

export const gridStyle = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(6, 1fr)', // ✅ 한 줄에 4개씩 배치
  columnGap: '6.4rem',
  rowGap: '4.8rem',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
});
