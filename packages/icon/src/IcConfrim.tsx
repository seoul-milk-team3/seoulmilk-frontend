import * as React from "react";
import type { SVGProps } from "react";
const SvgIcConfrim = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#A3A3A3"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m9 11 3 3L22 4"
    />
    <path
      stroke="#A3A3A3"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
    />
  </svg>
);
export default SvgIcConfrim;
