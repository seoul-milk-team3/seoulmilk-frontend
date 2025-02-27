import { css } from "@emotion/react";
import { colors } from "@seoulmilk/styles";

export const uploadWrapperStyle = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`;

export const uploadSectionContainerStyle = css`
  width: 92.4rem;
  height: 57.6rem;
  padding: 2rem;
  border: 0.3rem dashed ${colors.grayscale_30};
  border-radius: 2rem;
  text-align: center;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 9rem;
`;

export const fileListStyle = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.2rem;
  padding: 1rem;
  padding-bottom:8rem;
`;

export const fileItemStyle = css`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: ${colors.grayscale_10};
  border-radius: 1.2rem;
  position: relative;
  width: 39.4rem;
  height: 7.6rem;
`;

export const filePreviewStyle = css`
  width: 7.4rem;
  height: 5.2rem;
  border-radius: 0.4rem;
  object-fit: cover;
`;

export const fileNameStyle = css`
  font-size: 1.4rem;
  font-weight: 500;
  color: ${colors.grayscale_90};
`;