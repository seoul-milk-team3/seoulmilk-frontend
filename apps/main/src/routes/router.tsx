import AuthLayout from '@main/layouts/auth/AuthLayout';
import MainLayout from '@main/layouts/main/MainLayout';
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

const Login = lazy(() => import('@main/pages/login/LoginPage'));
const List = lazy(() => import('@main/pages/list/ListPage'));
const ConfirmList = lazy(() => import('@main/pages/confirm/ConfirmPage'));
const FileUpload = lazy(() => import('@main/pages/fileUpload/MainUploadPage'));
const SignUp = lazy(() => import('@main/pages/signUp/SignUpPage'));
const Detail = lazy(() => import('@main/pages/detail/DetailPage'));
const AuthSelect = lazy(() => import('@main/pages/authSelection/AuthSelectionPage'));
const ConfirmAnalysis = lazy(() => import('@main/pages/confrimAnalysis/ConfirmAnalysisPage'));
const ErrorCheck = lazy(() => import('@main/pages/errorCheck/ErrorCheckPage'));
export const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      { path: '/login', element: <Login /> },
      { path: '/signup', element: <SignUp /> },
    ],
  },

  {
    element: <MainLayout />,
    children: [
      { path: '/', element: <FileUpload /> },
      { path: '/confirm-list', element: <ConfirmList /> },
      { path: '/confirm-list/:id/auth', element: <AuthSelect /> },
      { path: '/confirm-list/:id/analysis', element: <ConfirmAnalysis /> },
      { path: '/list', element: <List /> },
      { path: '/list/:id/detail', element: <Detail /> },
      { path: '/list/:id/error', element: <ErrorCheck /> },
    ],
  },
]);
