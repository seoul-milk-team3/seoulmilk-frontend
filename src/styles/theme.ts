const colors = {
  main: '#E60012',

  sub_PANTONE_3022C: '#009857',
  sub_PANTONE_361C: '#6BBC64',
  sub_PANTONE_7484C: '#00573D',

  green_5: '#E6F5EE',
  green_10: '#B0DFCB',
  green_20: '#8AD0B2',
  green_30: '#54BA8E',
  green_40: '#33AD79',
  green_50: '#009857',
  green_60: '#008A4F',
  green_70: '#006C3E',
  green_80: '#005430',
  green_90: '#004025',

  grayscale_0: '#ffffff',
  grayscale_5: '#FAFAFA',
  grayscale_10: '#F5F5F5',
  grayscale_20: '#E5E5E5',
  grayscale_30: '#D4D4D4',
  grayscale_40: '#A3A3A3',
  grayscale_50: '#737373',
  grayscale_60: '#525252',
  grayscale_70: '#404040',
  grayscale_80: '#262626',
  grayscale_90: '#171717',
};

const text = {
  xxl_title_bold: {
    fontSize: '2.8rem',
    fontWeight: '700',
  },
  xxl_title_semibold: {
    fontSize: '2.8rem',
    fontWeight: '600',
  },

  xl_title_bold: {
    fontSize: '2.4rem',
    fontWeight: '700',
  },
  xl_title_semibold: {
    fontSize: '2.4rem',
    fontWeight: '600',
  },

  lg_subtitle_bold: {
    fontSize: '2rem',
    fontWeight: '700',
  },
  lg_subtitle_semibold: {
    fontSize: '2rem',
    fontWeight: '600',
  },
  lg_subtitle_medium: {
    fontSize: '2rem',
    fontWeight: '500',
  },

  md1_text_bold: {
    fontSize: '1.8rem',
    fontWeight: '700',
  },
  md1_text_semibold: {
    fontSize: '1.8rem',
    fontWeight: '600',
  },
  md1_text_medium: {
    fontSize: '1.8rem',
    fontWeight: '500',
  },
  md1_text_regular: {
    fontSize: '1.8rem',
  },

  md2_text_bold: {
    fontSize: '1.6rem',
    fontWeight: '700',
  },
  md2_text_semibold: {
    fontSize: '1.6rem',
    fontWeight: '600',
  },
  md2_text_medium: {
    fontSize: '1.6rem',
    fontWeight: '500',
  },
  md2_text_regular: {
    fontSize: '1.6rem',
  },

  sm_text_semibold: {
    fontSize: '1.4rem',
    fontWeight: '600',
  },
  sm_text_medium: {
    fontSize: '1.4rem',
    fontWeight: '500',
  },
  sm_text_regular: {
    fontSize: '1.4rem',
  },

  xs_text_medium: {
    fontSize: '1.2rem',
    fontWeight: '500',
  },
  xs_text_regular: {
    fontSize: '1.2rem',
  },
  xs_text_light: {
    fontSize: '1.2rem',
    fontWeight: '300',
  },
};

export const theme = {
  colors,
  text,
};

export type ColorType = typeof theme.colors;
export type TextType = typeof theme.text;
