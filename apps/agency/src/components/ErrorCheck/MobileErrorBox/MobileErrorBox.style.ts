import { css } from "@emotion/react";

export const containerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  padding: 16px;
  overflow-x: hidden;
  box-sizing: border-box;
  flex-shrink: 0;
`;

export const imageContainerStyle = css`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  max-width: 100%;
  height: 300px; /* 이미지 영역 높이 설정 */
  max-height: 300px;
  overflow: hidden;
  flex-shrink: 0;

  img {
    width: 100%;
    height:80%;
    object-fit: contain; /* 이미지가 컨테이너 내에 맞게 축소됨 */
  }
`;

export const imageWrapperStyle = css`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 100%;
  height: 100%; /* 부모 컨테이너 크기에 맞춤 */
  max-height: 100%;
  overflow: hidden;
  box-sizing: border-box;
  flex-shrink: 0;
`;


export const inputContainerStyle = css`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
`;

export const buttonContainerStyle = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  gap: 12px;
  box-sizing: border-box;
  flex-wrap: wrap; /* 가로 공간 부족 시 줄바꿈 */

  button {
    flex: 1;
    min-width: 100px;
    height: 48px;
    padding: 0px;
  }
`;


export const pageIndicatorStyle = css`
  position: absolute;
  top: 0;
  left: 0;
  color: black;
  padding: 4px 8px;
  border-radius: 0 0 5px 5px;
  font-size: 12px;
`;

export const paginationStyle = css`
  position: absolute;
  bottom: 5px;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  flex-wrap: wrap;
  box-sizing: border-box;
`;
