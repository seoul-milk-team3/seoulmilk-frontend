import { css } from "@emotion/react";
import { colors } from "@seoulmilk/styles";

export const Container = css`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 0.8rem;
`;

export const Title = css`
  font-size: 2.8rem;
  font-weight: bold;
  color: ${colors.grayscale_90};
`;

export const SubTitle = css`
  font-size: 1.8rem;
  color: ${colors.grayscale_40};
`;
