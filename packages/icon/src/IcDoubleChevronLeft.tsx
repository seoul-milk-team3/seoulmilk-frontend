import * as React from "react";
import type { SVGProps } from "react";
const SvgIcDoubleChevronLeft = (props: SVGProps<SVGSVGElement>) => (
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
    <path
      stroke="#A3A3A3"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m15 11-5 5 5 5M21.5 11l-5 5 5 5"
    />
  </svg>
);
export default SvgIcDoubleChevronLeft;
