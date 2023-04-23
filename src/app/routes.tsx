import { createBrowserRouter, Navigate } from 'react-router-dom'
import ApplicationLayout from 'pages/application'
import DashboardPage from 'pages/application/dashboardPage'
import AuthLayout from 'pages/auth'

const applicationRoutes = {
  path: '/',
  element: <ApplicationLayout />,
  children: [
    {
      path: '',
      element: <Navigate to="/dashboard" />,
    },
    {
      path: 'dashboard',
      element: <DashboardPage />,
    },
  ],
}

const authRoutes = {
  path: '/auth',
  element: <AuthLayout />,
}

const router = createBrowserRouter([applicationRoutes, authRoutes])

export default router
