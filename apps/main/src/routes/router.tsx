import AuthLayout from '@main/layouts/auth/AuthLayout';
import MainLayout from '@main/layouts/main/MainLayout';
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const Login = lazy(() => import('@main/pages/login/LoginPage'));
const List = lazy(() => import('@main/pages/list/ListPage'));
const ErrorList = lazy(() => import('@main/pages/errorList/ErrorListPage'));

export const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [{ path: '/login', element: <Login /> }],
  },

  {
    element: <MainLayout />,
    children: [
      // 일단 default 경로를 List 로 설정 --> 추후 변경해야함
      { path: '/', element: <List /> },
      { path: '/error-list', element: <ErrorList /> },
      { path: '/list', element: <List /> },
    ],
  },
]);
