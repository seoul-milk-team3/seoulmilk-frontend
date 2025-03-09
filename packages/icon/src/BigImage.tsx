import * as React from "react";
import type { SVGProps } from "react";
const SvgBigImage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 62 62"
    {...props}
  >
    <rect width={62} height={62} fill="#262626" fillOpacity={0.8} rx={31} />
    <g
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.48}
      clipPath="url(#big_image_svg__a)"
    >
      <path d="M19.043 29.893a10.85 10.85 0 1 0 21.699 0 10.85 10.85 0 0 0-21.699 0M25.243 29.893h9.3M29.893 25.243v9.3M42.293 42.293l-3.986-3.986" />
    </g>
    <defs>
      <clipPath id="big_image_svg__a">
        <path fill="#fff" d="M12.4 12.4h37.2v37.2H12.4z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBigImage;
