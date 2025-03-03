import * as React from "react";
import type { SVGProps } from "react";
const SvgIcChevronRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <rect width={31} height={31} x={0.5} y={0.5} fill="#fff" rx={15.5} />
    <rect width={31} height={31} x={0.5} y={0.5} stroke="#F5F5F5" rx={15.5} />
    <g clipPath="url(#ic_chevron_right_svg__a)">
      <path
        stroke="#A3A3A3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m13.5 21 5-5-5-5"
      />
    </g>
    <defs>
      <clipPath id="ic_chevron_right_svg__a">
        <path fill="#fff" d="M26 26H6V6h20z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIcChevronRight;
