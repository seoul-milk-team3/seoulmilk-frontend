import { css } from "@emotion/react";
import { NavLink } from "react-router-dom";

//테스트 사이드 바
export default function Sidebar() {
  return (
    <nav css={sidebarStyle}>
      <ul css={menuStyle}>
        <li>
          <NavLink to="/list" css={linkStyle}>
            홈
          </NavLink>
        </li>
        <li>
          <NavLink to="/error-list" css={linkStyle}>
            오류 내역
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

// 스타일 정의
const sidebarStyle = css`
  width: 240px;
  background-color: #ffffff;
  border-right: 1px solid #ddd;
  padding: 20px;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const menuStyle = css`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const linkStyle = css`
  display: block;
  padding: 10px 15px;
  font-size: 16px;
  color: #333;
  text-decoration: none;
  border-radius: 4px;

  &:hover {
    background-color: #f0f0f0;
  }
`;
