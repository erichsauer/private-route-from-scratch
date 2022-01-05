import { createContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const history = useHistory();

  const login = (email, password) => {
    if (email === process.env.EMAIL && password === process.env.PASSWORD) {
      setUser(email);
      history.push('/guestbook');
    } else setError('authentication failed!');
  };

  const logout = () => {
    setUser('');
    history.push('/');
  };

  return (
    <AuthContext.Provider value={{ user, login, error, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
