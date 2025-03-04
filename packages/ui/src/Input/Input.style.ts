import { css } from "@emotion/react";
import { colors, theme } from "@seoulmilk/styles";

export const descriptionStyle = css({
  color: theme.colors.grayscale_50,
});

export const inputWrapperStyle = (
  hasError: boolean,
  width: string,
  variant: "pc" | "mobile"
) =>
  css({
    position: "relative",
    display: "flex",
    alignItems: "center",
    width: width,
    border: `1px solid ${hasError ? theme.colors.main : theme.colors.grayscale_20}`,
    borderRadius: "8px",
    padding: variant === "pc" ? "1.75rem 2rem" : "1.4rem 2rem",
    backgroundColor: theme.colors.grayscale_0,
  });

export const iconStyle = css({
  position: "absolute",
  right: "2rem",
  cursor: "pointer",
});

export const inputStyle = css({
  flex: 1,
  border: "none",
  outline: "none",
  background: "transparent",
  ...theme.text.md2_text_regular,
  color: theme.colors.grayscale_80,

  "::placeholder": {
    color: theme.colors.grayscale_40,
  },
});

export const errorTextStyle = css({
  color: theme.colors.main,
  marginTop: "0.4rem",
  display: "flex",
  alignItems: "center",
  gap: "0.4rem",
  ...theme.text.sm_text_regular,
});
