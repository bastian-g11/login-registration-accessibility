/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line import/no-extraneous-dependencies
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import useAuth from '../hooks/useAuth';

const RequireAuth = ({ allowedRoles }) => {
  const { auth } = useAuth();
  const location = useLocation();
  const decoded = auth?.accessToken ? jwtDecode(auth.accessToken) : undefined;

  const roles = decoded?.UserInfo?.roles || [];

  // The outlet represents any child component of the RequireAuth
  // So this RequireAuth can protect all the child components that are nested inside of it
  // eslint-disable-next-line no-nested-ternary
  return roles.find((role) => allowedRoles?.includes(role)) ? (
    <Outlet />
  ) : auth?.user ? (
    // Without the state and the replace we couldn't go back in the navigation using the
    <Navigate to='/unauthorized' state={{ from: location }} replace />
  ) : (
    <Navigate to='/login' state={{ from: location }} replace />
  );
};

export default RequireAuth;
