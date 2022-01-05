import { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  const login = (email, password) => {
    if (email === process.env.EMAIL && password === process.env.PASSWORD)
      return email;
    return 'authentication failed!';
  };

  return (
    <AuthContext.Provider value={(user, login)}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
