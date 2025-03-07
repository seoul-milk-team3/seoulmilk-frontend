import AuthLayout from '@agency/layouts/auth/AuthLayout';
import MainLayout from '@agency/layouts/main/MainLayout';
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

const Login = lazy(() => import('@agency/pages/login/LoginPage'));
const List = lazy(() => import('@agency/pages/list/ListPage'));
const FileUpload = lazy(() => import('@agency/pages/fileUpload/AgencyUploadPage'));
const SignUp = lazy(() => import('@agency/pages/signUp/SignUpPage'));

export const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      { path: '/login', element: <Login /> },
      { path: '/signup', element: <SignUp /> },
    ],
  },

  {
    element: <PrivateRoute />, // 로그인하지 않으면 /login으로 이동
    children: [
      {
        element: <MainLayout />,
        children: [
          { path: '/', element: <FileUpload /> },
          { path: '/list', element: <List /> },
        ],
      },
    ],
  },
]);
