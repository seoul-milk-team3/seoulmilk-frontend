import { css } from "@emotion/react";
import { colors } from "@seoulmilk/styles";

export const fileCheckContainerStyle = (variant: "primary" | "secondary") => css`
  width: 92.4rem;
  height: 57.6rem;
  padding: 2rem;
  border-radius: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 9rem;
  background-color: ${colors.grayscale_0};

  ${variant === "primary" &&
  `
    border: 0.3rem dashed ${colors.grayscale_30};
  `}
`;
export const spinnerStyle = css`
  width: 9.8rem;
  height: 9.8rem;
  border-radius: 50%;
  background: conic-gradient(from 180deg at 50% 50%, #33AD79 0deg, rgba(217, 217, 217, 0) 360deg);
  
  mask-image: radial-gradient(circle, rgba(0, 0, 0, 0) 55%, rgba(0, 0, 0, 1) 55%);
  -webkit-mask-image: radial-gradient(circle, rgba(0, 0, 0, 0) 55%, rgba(0, 0, 0, 1) 55%);
  
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const titleText = css`
  font-size: 2.8rem;
  font-weight: bold;
  color: ${colors.grayscale_90};
  margin-top: 3rem;
  margin-bottom: 0.2rem;
`;

export const subtitleText = css`
  font-size: 1.8rem;
  font-weight: semibold;
  color: ${colors.grayscale_50};
`;

export const cancelButtonStyle = css`
  width: 20.2rem;
  height: 6.4rem;
  border: 0.2rem solid ${colors.grayscale_40};
  border-radius: 0.8rem;
  background-color: transparent;
  color: ${colors.grayscale_90};
  font-size: 1.6rem;
  font-weight: bold;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: ${colors.grayscale_20};
  }
`;
