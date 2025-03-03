import * as React from "react";
import type { SVGProps } from "react";
const SvgIcChevronLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <rect
      width={31}
      height={31}
      x={31.5}
      y={31.5}
      fill="#fff"
      rx={15.5}
      transform="rotate(180 31.5 31.5)"
    />
    <rect
      width={31}
      height={31}
      x={31.5}
      y={31.5}
      stroke="#F5F5F5"
      rx={15.5}
      transform="rotate(180 31.5 31.5)"
    />
    <g clipPath="url(#ic_chevron_left_svg__a)">
      <path
        stroke="#A3A3A3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m18.5 11-5 5 5 5"
      />
    </g>
    <defs>
      <clipPath id="ic_chevron_left_svg__a">
        <path fill="#fff" d="M6 6h20v20H6z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIcChevronLeft;
