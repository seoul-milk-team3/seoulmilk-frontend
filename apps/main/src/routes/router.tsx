import { AuthLayout } from '@seoulmilk/ui';
import { MainLayout } from '@seoulmilk/ui';
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const Login = lazy(() => import('@/pages/login/LoginPage'));
const List = lazy(() => import('@/pages/list/ListPage'));
const ErrorList = lazy(() => import('@/pages/errorList/ErrorListPage'));

export const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [{ path: '/login', element: <Login /> }],
  },

  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <List /> },
      { path: '/error-list', element: <ErrorList /> },
      { path: '/list', element: <List /> },
    ],
  },
]);
