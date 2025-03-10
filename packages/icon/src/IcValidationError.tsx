import * as React from "react";
import type { SVGProps } from "react";
const SvgIcValidationError = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 28 28"
    {...props}
  >
    <path
      stroke="#E60012"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14 25.667c6.444 0 11.667-5.224 11.667-11.667S20.443 2.333 14 2.333 2.334 7.557 2.334 14 7.557 25.667 14 25.667M14 9.333V14M14 18.667h.012"
    />
  </svg>
);
export default SvgIcValidationError;
