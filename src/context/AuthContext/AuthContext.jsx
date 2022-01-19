import { createContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  getUser,
  signInUser,
  signOutUser,
  signUpUser,
} from '../../services/users';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const sessionUser = getUser();
  const sessionEmail = sessionUser ? sessionUser.email : '';
  const [user, setUser] = useState(sessionEmail);
  const [error, setError] = useState('');
  const history = useHistory();

  const auth = async ({ email, password, callback, redirect }) => {
    try {
      const user = await callback(email, password);
      if (user.email) {
        setUser(user.email);
        history.push(redirect);
      }
    } catch (e) {
      setError(e.message);
    }
  };

  const signUp = async (email, password, emoji) =>
    await auth({
      email,
      password,
      emoji,
      callback: signUpUser,
      redirect: '/email-confirmation',
    });

  const login = async (email, password, emoji) =>
    await auth({
      email,
      password,
      emoji,
      callback: signInUser,
      redirect: '/guestbook',
    });

  const logout = async () => {
    await signOutUser();
    history.push('/login');
    setUser('');
  };

  return (
    <AuthContext.Provider value={{ user, error, login, logout, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
