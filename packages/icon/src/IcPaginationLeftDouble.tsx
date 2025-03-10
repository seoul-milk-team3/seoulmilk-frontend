import * as React from "react";
import type { SVGProps } from "react";
const SvgIcPaginationLeftDouble = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 32 33"
    {...props}
  >
    <rect
      width={31}
      height={31}
      x={-0.5}
      y={0.5}
      fill="#fff"
      rx={5.5}
      transform="matrix(-1 0 0 1 31 .913)"
    />
    <rect
      width={31}
      height={31}
      x={-0.5}
      y={0.5}
      stroke="#E5E5E5"
      rx={5.5}
      transform="matrix(-1 0 0 1 31 .913)"
    />
    <path
      stroke="#A3A3A3"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m15 21.913-5-5 5-5M21.5 21.913l-5-5 5-5"
    />
  </svg>
);
export default SvgIcPaginationLeftDouble;
