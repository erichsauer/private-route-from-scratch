import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const useAuth = () => {
  const context = useContext(AuthContext);

  if (context) return context;
  throw new Error("dang, your context ain't set up right");
};

export default useAuth;
