import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/features/auth/authSlice';

/**
 * @description A component that protects a route by checking if the user is authenticated.
 *
 * If the user is authenticated, it renders the children components. Otherwise, it redirects to the login page.
 *
 * @param {ReactNode} children - The components to render if the user is authenticated.
 * @returns {JSX.Element} - The children components or a redirect to the login page.
 */
export function ProtectedRoute({ children }: { children: ReactNode }) {
  const user = useAuth((s) => s.user);
  return user ? children : <Navigate to="/login" replace />;
}
