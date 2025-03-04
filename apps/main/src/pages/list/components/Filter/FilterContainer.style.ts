import { css } from '@emotion/react';
import { theme } from '@seoulmilk/styles';

export const inputContainerStyle = css({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  width: '23.6rem',
  height: '4.8rem',
  borderRadius: '12px',
  border: `1px solid ${theme.colors.grayscale_30}`,
  backgroundColor: 'white',
  paddingLeft: '3.3rem', // 아이콘 공간 확보
});

export const inputStyle = css({
  flex: 1,
  height: '100%',
  border: 'none',
  outline: 'none',
  background: 'transparent',
  padding: '0 1rem',
  ...theme.text.md2_text_medium,
  color: theme.colors.grayscale_80,
  '::placeholder': {
    color: theme.colors.grayscale_40,
  },
});

export const iconStyle = css({
  position: 'absolute',
  left: '1.2rem',
  width: '2.4rem',
  height: '2.4rem',
});

export const textColorStyle = css({
  color: theme.colors.grayscale_50,
});

export const resetBtnStyle = css({
  backgroundColor: theme.colors.grayscale_0,
  width: '5.4rem',
  height: '4.8rem',
  borderRadius: '10px',
});

export const searchBtnStyle = css({
  backgroundColor: theme.colors.green_50,
  color: theme.colors.grayscale_0,
  borderRadius: '12px',
  width: '11.4rem',
  height: '4.8rem',

  ...theme.text.md2_text_medium,
});
