import * as React from "react";
import type { SVGProps } from "react";
const SvgIcImageClose = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 40 40"
    {...props}
  >
    <rect width={40} height={40} fill="#525252" rx={20} />
    <g
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#ic_image_close_svg__a)"
    >
      <path d="M26 14 14 26M14 14l12 12" />
    </g>
    <defs>
      <clipPath id="ic_image_close_svg__a">
        <path fill="#fff" d="M8 8h24v24H8z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIcImageClose;
