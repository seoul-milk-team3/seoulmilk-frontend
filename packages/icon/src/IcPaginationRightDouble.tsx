import * as React from "react";
import type { SVGProps } from "react";
const SvgIcPaginationRightDouble = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <rect width={31} height={31} x={0.5} y={0.5} fill="#fff" rx={5.5} />
    <rect width={31} height={31} x={0.5} y={0.5} stroke="#E5E5E5" rx={5.5} />
    <path
      stroke="#A3A3A3"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m17 21 5-5-5-5M10.5 21l5-5-5-5"
    />
  </svg>
);
export default SvgIcPaginationRightDouble;
