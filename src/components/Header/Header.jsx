import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
  const { logout, user } = useAuth();
  return (
    <header>
      {user ? (
        <button onClick={logout}>Log Out</button>
      ) : (
        <NavLink activeStyle={{ display: 'none' }} exact to="/login">
          Auth
        </NavLink>
      )}
      {'  '}
      <NavLink activeStyle={{ display: 'none' }} exact to="/">
        Home
      </NavLink>
      {'  '}
      <NavLink activeStyle={{ display: 'none' }} exact to="/guestbook">
        Guestbook
      </NavLink>
      {'  '}
      {user && `Welcome, ${user}!`}
    </header>
  );
};

export default Header;
