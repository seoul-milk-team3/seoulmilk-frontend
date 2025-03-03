import { css } from '@emotion/react';
import { theme } from '@seoulmilk/styles';

export const labelStyles = {
  정상: css({
    backgroundColor: theme.colors.green_5,
    color: theme.colors.green_60,
  }),
  비정상: css({
    backgroundColor: '#FEEFEF',
    color: '#DA1414',
  }),
  미입금: css({
    backgroundColor: theme.colors.grayscale_20,
    color: theme.colors.grayscale_50,
  }),
};

export const labelBaseStyle = css({
  borderRadius: '12px',
  width: '9rem',
  height: '4.4rem',

  ...theme.text.md2_text_medium,
});
