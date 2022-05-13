import { useState } from 'react';
import { signIn, signUp, getUser } from './services/fetch-utils';

export default function AuthPage({ setEmail, setToken }) {
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');

  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');

  async function handleSignIn(e) {
    e.preventDefault();

    await signIn(signInEmail, signInPassword);

    const {
      access_token,
      user: { email },
    } = getUser;

    setEmail(email);
    setToken(access_token);
  }

  async function handleSignUp(e) {
    e.preventDefault();

    await signUp(signUpEmail, signUpPassword);

    const {
      access_token,
      user: { email },
    } = getUser();

    setEmail(email);
    setToken(access_token);
  }

  return (
    <div className="auth">
      <h1>
        <em>Restaurantzo</em>
      </h1>
      {/* on submit, sign the user up using the function defined above */}
      <form onSubmit={handleSignUp}>
        <label>
          Email
          {/* on change, update the form state for email */}
          <input
            required
            type="email"
            onChange={(e) => setSignUpEmail(e.target.value)}
            name="email"
          />
        </label>
        <label>
          Password
          {/* on change, update the form state for password */}
          <input
            required
            type="password"
            onChange={(e) => setSignUpPassword(e.target.value)}
            name="password"
          />
        </label>
        <button>Sign Up</button>
      </form>
      {/* on submit, sign the user in using the function defined above */}
      <form onSubmit={handleSignIn}>
        <label>
          Email
          {/* on change, update the form state for email */}
          <input
            required
            type="email"
            onChange={(e) => setSignInEmail(e.target.value)}
            name="email"
          />
        </label>
        <label>
          Password
          {/* on change, update the form state for password */}
          <input
            required
            type="password"
            onChange={(e) => setSignInPassword(e.target.value)}
            name="password"
          />
        </label>
        <button>Sign In</button>
      </form>
    </div>
  );
}
