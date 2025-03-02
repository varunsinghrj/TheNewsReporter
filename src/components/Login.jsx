import React, { useState } from 'react';
import lv from '../components/login.module.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle authentication logic here
    console.log({ email, password, rememberMe });
  };

  return (
    <div className={lv.loginContainer}>
      <div className={lv.loginBox}>
        <h2 className={lv.title}>Login</h2>
        <form onSubmit={handleSubmit} className={lv.loginForm}>
          <input 
            type="email" 
            name="email" 
            placeholder="Email Address" 
            className={lv.input} 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            className={lv.input} 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <div className={lv.options}>
            <label className={lv.checkboxLabel}>
              <input 
                type="checkbox" 
                checked={rememberMe} 
                onChange={() => setRememberMe(!rememberMe)} 
              />
              Remember Me
            </label>
            <a href="#" className={lv.forgotPassword}>Forgot Password?</a>
          </div>
          <button type="submit" className={lv.loginButton}>Login</button>
        </form>
        <p className={lv.signupText}>Don't have an account? <a href="/signup" className={lv.signupLink}>Sign Up</a></p>
      </div>
    </div>
  );
}
