import { Navigate } from 'react-router-dom';

export const RouteAuthentication = ({ children }) => {
  const isLoggedIn = true;
  if (!isLoggedIn) {
    return <Navigate to='/sign-in' />;
  } else {
    return children;
  }
};
