import { css } from "@emotion/react";
import { colors } from "@seoulmilk/styles";

export const uploadSectionContainerStyle = css`
  width: 92.4rem;
  height: 57.6rem;
  padding: 2rem;
  border: 0.3rem dashed ${colors.grayscale_30};
  border-radius: 2rem;
  text-align: center;
  cursor: pointer;
  background-color: ${colors.grayscale_0};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 9rem;
  margin-top:2rem;

  &:hover {
    background-color: ${colors.green_5};
  }
`;

export const uploadSectionContainerWithFileStyle = css`
  width: 92.4rem;
  height: 57.6rem;
  padding: 2rem;
  border-radius: 2rem;
  border: 0.3rem dashed ${colors.grayscale_30};
  background-color: ${colors.grayscale_5}; /* ✅ 배경 변경 */

  display: flex;
  flex-direction: column;
  justify-content: space-between; /* ✅ 컨텐츠 위쪽, 버튼 아래쪽 정렬 */
  align-items: center;
  margin-top:0rem;
`;

export const buttonContainerStyle = css`
  display: flex;
  justify-content: center; /* ✅ 버튼을 가운데 정렬 */
  align-items: center;
  gap: 2rem; /* ✅ 버튼 간 간격 조정 */
  width: 100%;
  margin-top: auto; /* ✅ 버튼을 하단에 정렬 */
  padding-bottom: 1.3rem; /* ✅ 하단 간격 추가 */
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
`;


export const fileInfoStyle = css`
display: flex;
align-items: flex-start; /* 내부 요소들을 상단에 정렬 */
gap: 2rem;
padding: 1rem;
padding-top:1rem;
border-radius: 1.2rem;
width: 77.4rem;
height: 14.9rem;
border: 2px solid ${colors.grayscale_30};
margin-left: 0rem;
margin-top:2rem;

`;

export const previewImageStyle = css`
width: 14.6rem;
height: 10.2rem;
border-radius: 0.4rem;
object-fit: cover;
margin : 3rem;
margin-right : 1rem;
margin-top : 1rem;
`;


/* ✅ 모달창 배경 */
export const modalOverlayStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5); /* ✅ 불투명한 회색 배경 */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

/* ✅ 모달창 스타일 */
export const modalContentStyle = css`
  background: ${colors.grayscale_0};
  border-radius: 1.6rem;
  padding: 2rem;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  width: 41.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
`;

/* ✅ 모달창 버튼 스타일 */
export const modalButtonStyle = css`
  width: 100%;
  padding: 1.2rem;
  font-size: 1.6rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: none;
  background: none;
  cursor: pointer;
  color: ${colors.grayscale_80};

  &:disabled {
    color: ${colors.grayscale_40};
  }
`;
