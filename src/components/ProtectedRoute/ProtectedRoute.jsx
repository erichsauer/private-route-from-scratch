import { Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const ProtectedRoute = ({ children, ...rest }) => {
  const { user } = useAuth();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect to={{ pathname: '/auth', state: { from: location } }} />
        )
      }
    />
  );
};

export default ProtectedRoute;
