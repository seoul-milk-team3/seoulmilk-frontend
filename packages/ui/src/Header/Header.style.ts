import { css } from "@emotion/react";
import { colors, theme } from "@seoulmilk/styles";

export const headerBaseStyle = css({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  position: "relative",

  width: "100vw",
  height: "7rem",
  padding: "1.6rem 4.8rem",
  boxSizing: "border-box",
});

export const rightSectionStyle = (variant?: "agency" | "main") =>
  css({
    alignItems: "center",
    fontSize: "1.3rem",
    color: variant === "agency" ? colors.grayscale_90 : colors.grayscale_0,
    marginLeft: "auto",
  });

export const headerVariantStyle = {
  main: css({
    backgroundColor: colors.green_50,
  }),
  agency: css({
    backgroundColor: colors.grayscale_0,
    borderBottom: `1px solid ${theme.colors.grayscale_20}`,
  }),
};

export const phoneStyle = css({
  textDecorationLine: "underline",
  color: theme.colors.grayscale_60,
});
