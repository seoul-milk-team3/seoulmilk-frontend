import { css } from "@emotion/react";

// 전체 페이지 컨테이너 스타일
export const pageContainerStyle = css`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #f9f9f9;
`;

// 메인 콘텐츠 컨테이너 (헤더 포함)
export const contentContainerStyle = css`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: #ffffff;
  overflow: hidden;
`;

export const mainContentStyle = css`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  flex-wrap: nowrap; /* 혹시라도 줄바꿈되지 않도록 설정 */
  overflow: visible; /* 기존 hidden 제거 */
  width: 100%;
`;


// 사이드바 스타일
export const sidebarStyle = css`
  width: 250px;
  background-color: #00873c; 
  color: white;
  flex-shrink: 0;
`;

// 업로드 메시지와 업로드 박스를 세로 정렬
export const uploadContentStyle = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex-grow: 1;
  padding: 4rem 5rem; /* 왼쪽(padding-left)과 위쪽(padding-top)에 여백 추가 */
  gap: 2rem; /* 메시지와 업로드 섹션 간격 */
`;


// 업로드 박스 스타일 (파일 업로드 중앙 정렬)
export const uploadBoxStyle = css`
  display: flex;
  width: 100%;
  max-width: 500px;
`;
