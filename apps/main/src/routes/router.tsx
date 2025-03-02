import AuthLayout from '@main/layouts/auth/AuthLayout';
import MainLayout from '@main/layouts/main/MainLayout';
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const Login = lazy(() => import('@main/pages/login/LoginPage'));
const List = lazy(() => import('@main/pages/list/ListPage'));
const ErrorList = lazy(() => import('@main/pages/errorList/ErrorListPage'));
const FileUpload = lazy(() => import('@main/pages/fileUpload/MainUploadPage'));

export const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [{ path: '/login', element: <Login /> }],
  },

  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <FileUpload /> },
      { path: '/error-list', element: <ErrorList /> },
      { path: '/list', element: <List /> },
    ],
  },
]);
