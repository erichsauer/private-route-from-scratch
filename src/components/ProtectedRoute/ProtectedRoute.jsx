import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const ProtectedRoute = ({ children, ...rest }) => {
  const { user } = useAuth();

  return user ? <Route {...rest}>{children}</Route> : <Redirect to={'/auth'} />;
};

export default ProtectedRoute;
