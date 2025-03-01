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

  backgroundColor: "grayscale_0",
  boxShadow: "0.4rem 0.4rem 0.8rem 0rem #9797972E",
});

export const dropdownItemStyle = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  width: "16.8rem",
  height: "5.6rem",
  padding: "1.2rem 1.6rem",

  color: "grayscale_70",
  fontSize: "1.6rem",
  textAlign: "center",

  cursor: "pointer",
  transition: "background-color 0.2s ease-in-out",

  "&:hover": {
    backgroundColor: colors.grayscale_20,
  },
});
