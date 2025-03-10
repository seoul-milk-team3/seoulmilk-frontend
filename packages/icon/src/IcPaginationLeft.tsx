import * as React from "react";
import type { SVGProps } from "react";
const SvgIcPaginationLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <rect
      width={31}
      height={31}
      x={-0.5}
      y={0.5}
      fill="#fff"
      rx={5.5}
      transform="matrix(-1 0 0 1 31 0)"
    />
    <rect
      width={31}
      height={31}
      x={-0.5}
      y={0.5}
      stroke="#E5E5E5"
      rx={5.5}
      transform="matrix(-1 0 0 1 31 0)"
    />
    <g clipPath="url(#ic_pagination_left_svg__a)">
      <path
        stroke="#A3A3A3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m18.5 21-5-5 5-5"
      />
    </g>
    <defs>
      <clipPath id="ic_pagination_left_svg__a">
        <path fill="#fff" d="M6 26h20V6H6z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIcPaginationLeft;
