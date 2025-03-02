import { css } from "@emotion/react";
import { theme } from "@seoulmilk/styles";

export const dropdownRootStyle = css({
  position: "relative",
  display: "inline-block",
  width: "auto",
});

export const triggerStyle = (type: "date" | "region" | "email") =>
  css({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    border: `1px solid ${theme.colors.grayscale_30}`,
    borderRadius: "12px",
    cursor: "pointer",
    padding: type === "email" ? "1.6rem 2rem" : "1.2rem 1.4rem",
    width:
      type === "date" ? "15.6rem" : type === "region" ? "19.1rem" : "19rem",
  });

export const dropdownListStyle = css({
  position: "absolute",
  top: "100%",
  marginTop: "0.8rem",
  left: 0,
  zIndex: 3,
  width: "16.3rem",
  overflowY: "hidden",
  borderRadius: "12px",
  backgroundColor: theme.colors.grayscale_0,
  boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
});

export const dropdownItemStyle = css({
  display: "flex",
  width: "100%",
  height: "4.8rem",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  color: theme.colors.grayscale_70,
  "&:hover": {
    backgroundColor: theme.colors.green_5,
    color: theme.colors.green_50,
  },
});

export const arrowStyle = (isOpen: boolean) =>
  css({
    transition: "transform 0.3s ease-in-out",
    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
  });
