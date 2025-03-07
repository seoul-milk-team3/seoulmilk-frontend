import { css } from "@emotion/react";
import { colors } from "@seoulmilk/styles";

export const uploadWrapperStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  width: 100%; /* 부모 컨테이너를 벗어나지 않도록 설정 */

`;

export const uploadSectionContainerStyle = css`
  width: 100%; /* 가득 차게 설정 */
  max-width: 92.4rem; /* 최대 너비 제한 */
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
  grid-template-columns: repeat(2, 1fr); /* 한 줄에 2개씩 배치 */
  gap: 1.2rem;
  flex-wrap: wrap;
  padding: 1rem;
  margin-bottom: 4rem;
  width: 100%;
  max-width: 80rem;
  justify-content: center; /* 중앙 정렬 */
`;




export const fileItemStyle = css`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: ${colors.grayscale_10};
  border-radius: 1.2rem;
  position: relative;
  width: 100%; /* 부모 컨테이너 내에서 유동적으로 크기 조정 */
  max-width: 39.4rem;
  height: 7.6rem;
  width: "calc(50% - 0.5rem)" 
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