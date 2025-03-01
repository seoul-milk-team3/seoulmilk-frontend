import { css } from "@emotion/react";
import { theme } from "@seoulmilk/styles";

// 전체 사이드바 컨테이너
export const sidebarContainerStyle = css({
  width: "25.5rem",
  height: "100vh",
  backgroundColor: theme.colors.grayscale_0,
  padding: "2.8rem 2.4rem",
  display: "flex",
  flexDirection: "column",

  zIndex: 2,

  boxShadow: "2px 0 6px rgba(0, 0, 0, 0.08)",
});

// 메뉴 리스트 스타일
export const menuListStyle = css({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  flexDirection: "column",
  gap: "1.6rem",
});

// 개별 메뉴 아이템 스타일
export const menuItemStyle = (isActive: boolean) =>
  css({
    display: "flex",
    alignItems: "center",
    gap: "1.4rem",
    padding: "1.2rem 2.4rem",
    textDecoration: "none",
    color: isActive ? theme.colors.green_50 : theme.colors.grayscale_40,

    fontWeight: isActive ? 700 : 500,
    borderRadius: "12px",
    backgroundColor: isActive ? theme.colors.green_5 : "transparent",

    "&:hover": {
      backgroundColor: theme.colors.green_5,
      color: theme.colors.green_50,
    },
  });

// 아이콘 스타일
export const menuIconStyle = css({
  "& svg": {
    width: "2.4rem",
    height: "2.4rem",
    stroke: "currentColor",
    transition: "stroke 0.3s ease-in-out",
  },
});
