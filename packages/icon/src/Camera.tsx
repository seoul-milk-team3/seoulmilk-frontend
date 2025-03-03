import * as React from "react";
import type { SVGProps } from "react";
const SvgCamera = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#camera_svg__a)">
      <g
        stroke="#171717"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        clipPath="url(#camera_svg__b)"
      >
        <path d="M5 7h1a2 2 0 0 0 2-2 1 1 0 0 1 1-1h6a1 1 0 0 1 1 1 2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2" />
        <path d="M9 13a3 3 0 1 0 6 0 3 3 0 0 0-6 0" />
      </g>
    </g>
    <defs>
      <clipPath id="camera_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
      <clipPath id="camera_svg__b">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCamera;
