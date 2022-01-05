import { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState('');
  const [error, setError] = useState('');

  const login = (email, password) => {
    if (email === process.env.EMAIL && password === process.env.PASSWORD)
      setUser(email);
    else setError('authentication failed!');
  };

  return (
    <AuthContext.Provider value={{ user, login, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
