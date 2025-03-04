import { css } from "@emotion/react";
import { theme } from "@seoulmilk/styles";

export const inputStyle = css({
  appearance: "none",
  WebkitAppearance: "none",
  MozAppearance: "none",

  width: "2.4rem",
  height: "2.4rem",

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

  "&:checked + svg": {
    display: "block",
  },
});

export const iconStyle = css({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "none",
});
