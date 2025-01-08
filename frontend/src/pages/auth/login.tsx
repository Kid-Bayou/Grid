import React, { useState } from "react";
import googleIcon from '../../assets/icons/google.svg';
import eyeOpenedIcon from '../../assets/icons/eye-opened.svg';
import eyeClosedIcon from '../../assets/icons/eye-closed.svg';
import emailIcon from '../../assets/icons/email.svg';

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in with", { email, password });
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleLogin}>
        <h2>Login</h2>

        <div className="label-input">
          <label htmlFor="email">Email</label>
          <div className="input-with-icon">
            <img src={emailIcon} alt="email icon" className="input-icon" />
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
        </div>

        <div className="label-input">
          <label htmlFor="password">Password</label>
          <div className="input-with-icon">
            <img
              src={showPassword ? eyeOpenedIcon : eyeClosedIcon}
              alt="toggle password visibility"
              className="input-icon toggle-icon"
              onClick={() => setShowPassword(!showPassword)}
            />
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
        </div>

        <button type="submit">Login</button>

        <div className="google-signin">
          <img src={googleIcon} alt="Google sign-in" className="google-icon" />
          <p>Sign in with Google</p>
        </div>

        <div className="signup-link">
          Don&apos;t have an account? <a href="#">Sign Up Here</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
