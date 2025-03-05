import * as React from "react";
import type { SVGProps } from "react";
const SvgIcNaver = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 72 72"
    {...props}
  >
    <rect
      width={71}
      height={71}
      x={0.5}
      y={0.5}
      fill="#03E362"
      stroke="#D4D4D4"
      rx={7.5}
    />
    <g clipPath="url(#ic_naver_svg__a)">
      <path
        fill="#fff"
        d="M41.793 37.353 30.27 20.72H20.72V51.8h10.005V35.165l11.522 16.632H51.8V20.72H41.793z"
      />
    </g>
    <defs>
      <clipPath id="ic_naver_svg__a">
        <path fill="#fff" d="M20.72 20.72h31.079v31.078h-31.08z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIcNaver;
