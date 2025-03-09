import { css } from "@emotion/react";
export const ContainerStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  position: fixed;
  background: #FAFAFA;

`;
// ErrorBox.style.ts
export const imageContainerStyle = css`
  display: flex; /* flexbox로 자식 요소를 중앙 정렬 */
  justify-content: center; /* 가로로 중앙 정렬 */
  align-items: center; /* 세로로 중앙 정렬 */
  border-radius: 8px;
  width: 60%; /* 너비는 화면에 맞게 */
  max-width: 60%; /* 최대 너비 설정 */
  min-width: 60%; /* 최소 너비 설정 */
  height: 100%; /* 높이도 화면에 맞게 */
  max-height:100%;
  min-height:100%;
  position: relative;
`;
export const imageBox = css`
  display: flex; /* flexbox로 자식 요소를 중앙 정렬 */
  width: 620px; /* 이미지의 너비 설정 */
  height: 436px; /* 이미지의 높이 설정 */
  border-radius: 24px; /* 이미지의 둥근 모서리 */
  position: absolute; /* 절대 위치 설정 */
  top: px; /* 세로 중앙 위치 */
  right: 50px; /* 가로 중앙 위치 */
`;

export const imageStyle = css`
  max-width: 100%; /* 이미지가 컨테이너를 넘지 않도록 설정 */
  max-height: 100%; /* 이미지의 최대 높이를 컨테이너에 맞춤 */
  object-fit: contain; /* 이미지 비율을 유지하면서 영역에 맞게 조정 */
  position: absolute; /* 이미지 위치를 절대적으로 설정 */
`;




export const errorBoxWrapperStyle = css`
  display: flex;

  box-shadow: 4px 0px 12px 0px rgba(0, 0, 0, 0.1);
  flex-direction: column;
  background: #fff;
  padding: 5rem;
  padding-top: 3rem;
  height: 100%;
  width: 40%;
  min-width: 40%;
  min-height: 100%;
  max-width: 40%;
  position: relative;
  overflow: hidden;
  margin-right: auto; /* 오른쪽 공간을 자동으로 차지 */
  gap: 1.5rem; /* 항목 간의 여백 */
`;


export const fieldContainerStyle = css`
  flex-grow: 1; /* 입력 필드가 가능한 공간을 차지하도록 설정 */
  overflow-y: auto; /* 스크롤 허용 */
  margin-top: rem; /* 제목 아래 여백 */
  width: 400px;
  max-height: 65vh; /* 화면 크기에 따라 최대 높이를 제한 */
  height: auto; /* 자동 높이 조정 */
`;



export const buttonContainerStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0rem; /* 버튼 양옆에 패딩 */
  gap: 1rem; /* 버튼 간 간격 */
  margin-top: 1.5rem; /* 필드와 버튼 사이의 간격 */
  width: 400px;
`;



export const containerStyle = css`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const labelStyle = css`
  font-size: 1rem;
  font-weight: 600;
  color: #333;
`;

export const inputStyle = css`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  &:focus {
    border-color: #007aff;
    outline: none;
  }
`;

export const buttonWrapperStyle = css`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;
