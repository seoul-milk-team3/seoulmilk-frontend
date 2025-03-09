import * as React from "react";
import type { SVGProps } from "react";
const SvgLoading = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 92 92"
    {...props}
  >
    <g clipPath="url(#loading_svg__a)" data-figma-skip-parse="true">
      <foreignObject
        width={2034.48}
        height={2034.48}
        x={-1017.24}
        y={-1017.24}
        transform="rotate(90 0 46)scale(.046)"
      >
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          style={{
            background:
              "conic-gradient(from 90deg,#33ad79 0deg,rgba(217,217,217,0) 360deg)",
            height: "100%",
            width: "100%",
            opacity: 1,
          }}
        />
      </foreignObject>
    </g>
    <path
      d="M92 46c0 25.405-20.595 46-46 46S0 71.405 0 46 20.595 0 46 0s46 20.595 46 46m-81.246 0c0 19.466 15.78 35.246 35.246 35.246S81.246 65.466 81.246 46 65.466 10.754 46 10.754 10.754 26.534 10.754 46"
      data-figma-gradient-fill='{"type":"GRADIENT_ANGULAR","stops":[{"color":{"r":0.20000000298023224,"g":0.67843139171600342,"b":0.47450980544090271,"a":1.0},"position":0.0},{"color":{"r":0.85098040103912354,"g":0.85098040103912354,"b":0.85098040103912354,"a":0.0},"position":1.0}],"stopsVar":[{"color":{"r":0.20000000298023224,"g":0.67843139171600342,"b":0.47450980544090271,"a":1.0},"position":0.0},{"color":{"r":0.85098040103912354,"g":0.85098040103912354,"b":0.85098040103912354,"a":0.0},"position":1.0}],"transform":{"m00":5.6333755748313313e-15,"m01":-92.0,"m02":92.0,"m10":92.0,"m11":5.6333755748313313e-15,"m12":-5.6333755748313313e-15},"opacity":1.0,"blendMode":"NORMAL","visible":true}'
    />
    <circle cx={45.847} cy={86.633} r={5.367} fill="#33AD79" />
    <defs>
      <clipPath id="loading_svg__a">
        <path d="M92 46c0 25.405-20.595 46-46 46S0 71.405 0 46 20.595 0 46 0s46 20.595 46 46m-81.246 0c0 19.466 15.78 35.246 35.246 35.246S81.246 65.466 81.246 46 65.466 10.754 46 10.754 10.754 26.534 10.754 46" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLoading;
