import { css } from "@emotion/react";
import { colors, theme } from "@seoulmilk/styles";

export const paginationStyle = css({
  alignItems: "center",
  gap: "1.7rem",
  justifyContent: "center",
  width: "100%",
  paddingTop: "1.4rem",
});

export const pageButtonStyle = (isActive: boolean) =>
  css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "3.2rem",
    width: "3.2rem",
    fontSize: "1.6rem",
    fontWeight: isActive ? "700" : "400",
    color: isActive ? theme.colors.grayscale_0 : theme.colors.grayscale_40,
    cursor: "pointer",

    ...(isActive && {
      borderRadius: "6px",
      background: theme.colors.green_50,
    }),
  });
