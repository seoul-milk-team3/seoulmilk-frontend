import { css } from "@emotion/react";
import { colors } from "@seoulmilk/styles";

export const containerStyle = css`
  width: 100%;
  max-width: 92.4rem;
  height: 57.6rem; /* 컨테이너 높이 설정 */
  padding: 2rem;
  border-radius: 2rem;
  text-align: center;
  cursor: pointer;

  display: flex;
  flex-direction: row; /* 좌우 배치 적용 */
  align-items: center;
  justify-content: space-between; /* 좌우 정렬 */
  gap: 4rem;
  position: relative;
  overflow: hidden;
`;

export const imageContainerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%; /* 왼쪽 절반 차지 */
  max-width: 92.4rem;
  max-height: 443px;
  gap: 16px;
  position: relative;
`;

export const inputContainerStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 60%; /* 오른쪽 절반 차지 */
  max-height: 100%; /* 컨테이너 높이 안에서 유지 */
  max-width: 60%; /* 최대 너비 제한 */
  gap: 36px;
  overflow-y: auto; /* 필요 시 스크롤 가능 */
  word-wrap: break-word;
`;

export const buttonContainerStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 100%; /* 버튼 크기 동일하게 조정 */
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  margin-top:3rem;
  padding-top:3rem;
`;


export const imageWrapperStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 696px;
  height: auto;
`;

export const pageIndicatorStyle = css`
  color: black;
  padding: 4px 8px;
  font-size: 14px;
  align-self: flex-start;
`;

export const paginationStyle = css`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  gap: 8px;
`;