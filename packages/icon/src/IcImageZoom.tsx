import * as React from "react";
import type { SVGProps } from "react";
const SvgIcImageZoom = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 50 50"
    {...props}
  >
    <rect width={50} height={50} fill="#262626" fillOpacity={0.8} rx={25} />
    <g
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#ic_image_zoom_svg__a)"
    >
      <path d="M15.357 24.107a8.75 8.75 0 1 0 17.499 0 8.75 8.75 0 0 0-17.499 0M20.357 24.107h7.5M24.107 20.357v7.5M34.107 34.107l-3.214-3.214" />
    </g>
    <defs>
      <clipPath id="ic_image_zoom_svg__a">
        <path fill="#fff" d="M10 10h30v30H10z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIcImageZoom;
