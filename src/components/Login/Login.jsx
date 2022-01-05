import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form>
      <fieldset>
        <legend>Welcome back!</legend>
        <label htmlFor="name">name</label>
        <input type="email" name="name" />
        <label htmlFor="password">password</label>
        <input type="password" name="password" />
        <button>Login</button>
      </fieldset>
    </form>
  );
};

export default Login;
