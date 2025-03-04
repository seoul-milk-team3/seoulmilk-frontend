import { css } from "@emotion/react";
import { theme } from "@seoulmilk/styles";

export const dropdownRootStyle = css({
  position: "relative",
  display: "inline-block",
  width: "auto",
});

export const triggerStyle = (
  type: "date" | "region" | "email" | "status",
  isMobile: boolean
) =>
  css({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    border: `1px solid ${
      type === "email" ? theme.colors.grayscale_20 : theme.colors.grayscale_30
    }`,
    backgroundColor: theme.colors.grayscale_0,
    borderRadius: type === "email" ? "8px" : "12px",
    cursor: "pointer",
    padding: type === "email" ? "1.5rem 2rem" : "1.2rem 1.4rem",
    width:
      type === "email" && isMobile
        ? "16.1rem"
        : type === "date"
          ? "15.6rem"
          : type === "region"
            ? "19.1rem"
            : type === "status"
              ? "10.9rem"
              : "19rem",
  });

export const dropdownListStyle = (
  type: "date" | "region" | "email" | "status",
  isMobile: boolean
) =>
  css({
    position: "absolute",
    top: "100%",
    marginTop: "0.8rem",
    left: 0,
    zIndex: 3,
    width:
      type === "status"
        ? "10.9rem"
        : type === "email" && isMobile
          ? "16.1rem" // email일 때 모바일에서는 16.1rem
          : "16.3rem", // 기본값
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
    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
  });
