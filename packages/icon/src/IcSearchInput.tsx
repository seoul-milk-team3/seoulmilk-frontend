import * as React from "react";
import type { SVGProps } from "react";
const SvgIcSearchInput = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g
      stroke="#009857"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#ic_search_input_svg__a)"
    >
      <path d="M4 11a7 7 0 1 0 14 0 7 7 0 0 0-14 0M20 20l-4-4" />
    </g>
    <defs>
      <clipPath id="ic_search_input_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIcSearchInput;
