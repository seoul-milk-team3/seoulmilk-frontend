import { css } from "@emotion/react";

export const modalOverlayStyle = css({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  background: "rgba(0, 0, 0, 0.6)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 4,
  padding: "5rem 10rem",
});

export const modalContainerStyle = css({
  position: "relative",
  borderRadius: "32px",
  backgroundColor: "white",
  width: "100%",
  height: "100%",
});

export const closeButtonStyle = css({
  position: "absolute",
  top: "2rem",
  right: "2rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
});

export const imageStyle = css({
  width: "100%",
  height: "100%",
  borderRadius: "32px",
  objectFit: "contain",
});
