import AuthLayout from '@agency/layouts/auth/AuthLayout';
import MainLayout from '@agency/layouts/main/MainLayout';
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const Login = lazy(() => import('@agency/pages/login/LoginPage'));
const List = lazy(() => import('@agency/pages/list/ListPage'));
const FileUpload = lazy(() => import('@agency/pages/fileUpload/AgencyUploadPage'));

export const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [{ path: '/login', element: <Login /> }],
  },

  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <FileUpload /> },
      { path: '/list', element: <List /> },
    ],
  },
]);
