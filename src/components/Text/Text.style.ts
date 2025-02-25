import { css } from '@emotion/react';
import { theme } from '@/styles/theme';
import { TextTag } from '@/types/textTyes';

export const textStyle: Record<TextTag, ReturnType<typeof css>> = {
  'xxl-title-bold': css({
    fontSize: theme.text.xxl_title_bold.fontSize,
    fontWeight: theme.text.xxl_title_bold.fontWeight,
  }),
  'xxl-title-semibold': css({
    fontSize: theme.text.xxl_title_semibold.fontSize,
    fontWeight: theme.text.xxl_title_semibold.fontWeight,
  }),
  'xl-title-bold': css({
    fontSize: theme.text.xl_title_bold.fontSize,
    fontWeight: theme.text.xl_title_bold.fontWeight,
  }),
  'xl-title-semibold': css({
    fontSize: theme.text.xl_title_semibold.fontSize,
    fontWeight: theme.text.xl_title_semibold.fontWeight,
  }),
  'lg-subtitle-bold': css({
    fontSize: theme.text.lg_subtitle_bold.fontSize,
    fontWeight: theme.text.lg_subtitle_bold.fontWeight,
  }),
  'lg-subtitle-semibold': css({
    fontSize: theme.text.lg_subtitle_semibold.fontSize,
    fontWeight: theme.text.lg_subtitle_semibold.fontWeight,
  }),
  'lg-subtitle-medium': css({
    fontSize: theme.text.lg_subtitle_medium.fontSize,
    fontWeight: theme.text.lg_subtitle_medium.fontWeight,
  }),
  'md1-text-bold': css({
    fontSize: theme.text.md1_text_bold.fontSize,
    fontWeight: theme.text.md1_text_bold.fontWeight,
  }),
  'md1-text-semibold': css({
    fontSize: theme.text.md1_text_semibold.fontSize,
    fontWeight: theme.text.md1_text_semibold.fontWeight,
  }),
  'md1-text-medium': css({
    fontSize: theme.text.md1_text_medium.fontSize,
    fontWeight: theme.text.md1_text_medium.fontWeight,
  }),
  'md1-text-regular': css({
    fontSize: theme.text.md1_text_regular.fontSize,
  }),
  'md2-text-bold': css({
    fontSize: theme.text.md2_text_bold.fontSize,
    fontWeight: theme.text.md2_text_bold.fontWeight,
  }),
  'md2-text-semibold': css({
    fontSize: theme.text.md2_text_semibold.fontSize,
    fontWeight: theme.text.md2_text_semibold.fontWeight,
  }),
  'md2-text-medium': css({
    fontSize: theme.text.md2_text_medium.fontSize,
    fontWeight: theme.text.md2_text_medium.fontWeight,
  }),
  'md2-text-regular': css({
    fontSize: theme.text.md2_text_regular.fontSize,
  }),
  'sm-text-semibold': css({
    fontSize: theme.text.sm_text_semibold.fontSize,
    fontWeight: theme.text.sm_text_semibold.fontWeight,
  }),
  'sm-text-medium': css({
    fontSize: theme.text.sm_text_medium.fontSize,
    fontWeight: theme.text.sm_text_medium.fontWeight,
  }),
  'sm-text-regular': css({
    fontSize: theme.text.sm_text_regular.fontSize,
  }),
  'xs-text-medium': css({
    fontSize: theme.text.xs_text_medium.fontSize,
    fontWeight: theme.text.xs_text_medium.fontWeight,
  }),
  'xs-text-regular': css({
    fontSize: theme.text.xs_text_medium.fontSize,
    fontWeight: theme.text.xs_text_medium.fontWeight,
  }),
  'xs-text-light': css({
    fontSize: theme.text.xs_text_light.fontSize,
    fontWeight: theme.text.xs_text_light.fontWeight,
  }),
};
