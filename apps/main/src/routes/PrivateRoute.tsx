import { USER_ID_KEY } from '@seoulmilk/utils';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const isAuthenticated = !!localStorage.getItem(USER_ID_KEY); // 로그인 여부 확인

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
