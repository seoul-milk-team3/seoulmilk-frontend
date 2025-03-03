import * as React from "react";
import type { SVGProps } from "react";
const SvgIcReset = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g
      stroke="#737373"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#ic_reset_svg__a)"
    >
      <path d="M3.06 13a9 9 0 1 0 .49-4.087" />
      <path d="M3 4.001v5h5" />
    </g>
    <defs>
      <clipPath id="ic_reset_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIcReset;
