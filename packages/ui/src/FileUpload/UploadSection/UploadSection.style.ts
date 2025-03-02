import { css } from "@emotion/react";
import { colors } from "@seoulmilk/styles";

export const uploadWrapperStyle = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  padding-top: 1rem;
`;

export const uploadSectionContainerStyle = (hasFiles: boolean) => css`
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
  justify-content: flex-start;
  gap: 9rem;

  background-color: ${colors.grayscale_0};

  ${!hasFiles &&
  `&:hover {
    background-color: ${colors.green_5};
  }`}
`;

export const fileItemStyle = css`
  display: flex;
  align-items: flex-start; /* 내부 요소들을 상단에 정렬 */
  gap: 2rem;
  padding: 1rem;
  padding-top:1rem;
  border-radius: 1.2rem;
  width: 77.4rem;
  height: 14.9rem;
  border: 2px solid ${colors.grayscale_30};
  margin-left: 3rem;
  
`;


export const fileListStyle = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.2rem;
  padding: 2rem;
  padding-bottom: 1rem;
  overflow-y: auto;
`;

export const filePreviewStyle = css`
  width: 14.6rem;
  height: 10.2rem;
  border-radius: 0.4rem;
  object-fit: cover;
  margin : 3rem;
  margin-right : 1rem;
  margin-top : 1rem;

`;


export const buttonStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  white-space: nowrap;

  width: 35.9rem;
  height: 6.4rem;
  gap: 1rem;
  border-radius: 1.2rem;
  padding: 1.8rem 14.4rem;

  font-size: 1.6rem;
  font-weight: bold;

  &:disabled {
    background: ${colors.grayscale_20};
    color: ${colors.grayscale_50};
  }
  display: flex;
  gap: 2rem;
  margin-top: auto; /* 버튼을 하단에 위치하도록 설정 */
`;
