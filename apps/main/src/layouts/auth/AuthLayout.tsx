import { css } from '@emotion/react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div css={authContainerStyle}>
      <Outlet />
    </div>
  );
};

export default AuthLayout;

const authContainerStyle = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
});
