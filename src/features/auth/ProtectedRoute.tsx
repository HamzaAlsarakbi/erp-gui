import { Navigate, Outlet } from 'react-router-dom';

import { ROUTES } from '@/constants/routes';

import { useAuth } from '@/features/auth/authSlice';

/**
 * @description A component that protects a route by checking if the user is authenticated.
 *
 */
export const ProtectedRoutes = () => {
  const user = useAuth((s) => s.user);
  return user ? <Outlet /> : <Navigate to={ROUTES.login} replace />;
};
