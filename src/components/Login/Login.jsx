import { useState } from 'react';

const Login = () => {
  const initialFormState = {
    email: '',
    password: '',
  };
  const [{ email, password }, setFormState] = useState(initialFormState);

  const handleFormChange = ({ target: { name, value } }) => {
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // login method from provider
  };

  return (
    <form onChange={handleFormChange} onSubmit={handleFormSubmit}>
      <fieldset>
        <legend>Welcome back!</legend>
        <label htmlFor="email">email</label>
        <input value={email} type="email" name="email" />
        <label htmlFor="password">password</label>
        <input value={password} type="password" name="password" />
        <button>Login</button>
      </fieldset>
    </form>
  );
};

export default Login;
