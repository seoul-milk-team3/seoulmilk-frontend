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
  height: auto;
  overflow: hidden;
  flex-shrink: 0;

  img {
    max-width: 100%;
    height: auto;
    display: block;
    object-fit: contain;
  }
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

export const imageWrapperStyle = css`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 100%;
  height: 188px;
  margin-top: 30px;
  margin-bottom: 25px;
  overflow: hidden;
  box-sizing: border-box;
  flex-shrink: 0;
  
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
