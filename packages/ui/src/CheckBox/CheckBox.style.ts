import { css } from "@emotion/react";
import { theme } from "@seoulmilk/styles";

export const wrapperStyle = css({
  position: "relative",
  display: "inline-block",
  width: "2.4rem",
  height: "2.4rem",
  marginRight: "13rem",
});

export const inputStyle = css({
  appearance: "none",
  WebkitAppearance: "none",
  MozAppearance: "none",

  width: "100%",
  height: "100%",

  border: `2px solid ${theme.colors.grayscale_40}`,
  borderRadius: "3px",
  backgroundColor: theme.colors.grayscale_0,

  flexShrink: 0,
  cursor: "pointer",
  position: "relative",

  "&:checked": {
    backgroundColor: theme.colors.green_50,
    borderColor: theme.colors.green_50,
  },
});

export const iconStyle = (isChecked: boolean) =>
  css({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",

    display: isChecked ? "block" : "none",
  });
