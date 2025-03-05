import { css } from "@emotion/react";

export const spinnerStyle = (size: number) =>
  css({
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: "50%",
    background:
      "conic-gradient(from 180deg at 50% 50%, #33ad79 0deg, rgba(217, 217, 217, 0) 360deg)",

    maskImage:
      "radial-gradient(circle, rgba(0, 0, 0, 0) 55%, rgba(0, 0, 0, 1) 55%)",
    WebkitMaskImage:
      "radial-gradient(circle, rgba(0, 0, 0, 0) 55%, rgba(0, 0, 0, 1) 55%)",

    animation: "spin 1s linear infinite",

    "@keyframes spin": {
      "0%": { transform: "rotate(0deg)" },
      "100%": { transform: "rotate(360deg)" },
    },
  });
