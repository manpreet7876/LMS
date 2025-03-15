import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Login.css";

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleAuth = () => {
    setError('');
    const storedUser = JSON.parse(localStorage.getItem('user'));
    
    if (isLogin) {
      // Login Logic
      if (storedUser && storedUser.email === email && storedUser.password === password) {
        navigate('/dashboard');
      } else {
        setError('Invalid email or password');
      }
    } else {
      // Signup Logic
      if (!email || !password) {
        setError('Please enter valid details');
        return;
      }
      
      if (storedUser && storedUser.email === email) {
        setError('Your account already exists. Please log in.');
        return;
      }
      
      const newUser = { email, password };
      localStorage.setItem('user', JSON.stringify(newUser));
      setIsLogin(true);
      setError('Signup successful! Please log in.');
    }
  };

  return (
    <div className="auth-container">
      <h2>{isLogin ? 'Login' : 'Signup'}</h2>
      {error && <p className="error-message">{error}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleAuth}>{isLogin ? 'Login' : 'Signup'}</button>
      <p className="toggle-text" onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'New user? Signup here' : 'Already have an account? Login here'}
      </p>
    </div>
  );
};

export default LoginPage;