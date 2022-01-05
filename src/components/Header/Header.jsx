import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link to="/auth">Auth</Link>
      {'  '}
      <Link to="/auth">Home</Link>
      {'  '}
      <Link to="/auth">Guestbook</Link>
    </header>
  );
};

export default Header;
