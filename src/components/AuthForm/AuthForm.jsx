import { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const AuthForm = ({ existingUser = false }) => {
  const initialFormState = {
    email: '',
    password: '',
    emoji: 'select your avatar',
  };
  const [{ email, password, emoji }, setFormState] = useState(initialFormState);
  const { login, signUp, error } = useAuth();

  const handleFormChange = ({ target: { name, value } }) => {
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // login method from provider
    existingUser ? login(email, password) : signUp(email, password);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <fieldset style={{ display: 'flex', flexDirection: 'column' }}>
        <legend>{existingUser ? 'Welcome back!' : 'Welcome!'}</legend>
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
        <select value={emoji} name="emoji" onChange={handleFormChange}>
          <option value="select your avatar">select your avatar</option>
          {['🦁', '🐵', '🦉'].map((emoji) => (
            <option value={emoji} key={emoji}>
              {emoji}
            </option>
          ))}
        </select>
        <button>{existingUser ? 'Login' : 'Sign Up'}</button>
        {error}
      </fieldset>
      <span>{existingUser ? 'no account?' : 'have an account?'}</span>
      {'  '}

      <Link to={existingUser ? '/signup' : '/login'}>
        {existingUser ? 'sign up here!' : 'log in here!'}
      </Link>
    </form>
  );
};

export default AuthForm;
