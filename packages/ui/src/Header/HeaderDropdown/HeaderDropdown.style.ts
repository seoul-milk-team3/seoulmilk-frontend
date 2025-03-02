import { css } from "@emotion/react";
import { colors } from "@seoulmilk/styles";

export const dropdownMenuStyle = css({
  display: "flex",
  flexDirection: "column",
  visibility: "visible",
  overflow: "hidden",

  position: "absolute",
  top: "5rem",
  right: "0rem",
  zIndex: 1000,

  width: "16.8rem",
  height: "11.2rem",
  paddingTop: "1rem",
  borderRadius: "1.2rem",

  backgroundColor: colors.grayscale_0,
  boxShadow: "0.4rem 0.4rem 0.8rem 0rem #9797972E",
});

export const dropdownItemStyle = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  width: "16.8rem",
  height: "5.6rem",
  padding: "1.2rem 1.6rem",

  fontSize: "1.6rem",
  textAlign: "center",
  cursor: "pointer",
  transition: "background-color 0.2s ease-in-out",

  // 기본 색상 (agency)
  color: colors.grayscale_70,

  "&[data-variant='main']": {
    color: colors.grayscale_90, // main일 때 글씨 검정색 유지
  },

  "&:hover": {
    backgroundColor: colors.grayscale_20,
  },
});
