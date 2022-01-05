import { useState } from 'react';
import useAuth from '../../hooks/useAuth';

const Login = () => {
  const initialFormState = {
    email: '',
    password: '',
  };
  const [{ email, password }, setFormState] = useState(initialFormState);
  const { user, login, error } = useAuth();

  const handleFormChange = ({ target: { name, value } }) => {
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  let loginSuccess;
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // login method from provider
    loginSuccess = login(email, password);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <fieldset>
        <legend>Welcome back!</legend>
        <label htmlFor="email">email</label>
        <input
          onChange={handleFormChange}
          value={email}
          type="email"
          name="email"
        />
        <label htmlFor="password">password</label>
        <input
          onChange={handleFormChange}
          value={password}
          type="password"
          name="password"
        />
        <button>Login</button>
        {error}
      </fieldset>
    </form>
  );
};

export default Login;
