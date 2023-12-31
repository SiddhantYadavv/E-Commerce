import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Auth = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const navigate = useNavigate()

  const dummyCred=(e)=>{
    e.preventDefault()
    setUsername("kminchelle")
    setPassword("0lelplR")
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post('https://dummyjson.com/auth/login', {
        username,
        password,
      });
      const newToken = response.data
      setToken(newToken);
      props.onTokenChange(newToken)
      navigate("/home")
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2 className="auth-title">Login</h2>
        <div className="form-group">
          <label htmlFor="username" className="auth-label">
            Username:
          </label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="auth-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="auth-label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="auth-input"
          />
        </div>
        <button type="submit" className="auth-button">
          Login
        </button>
        <button onClick={dummyCred} className="dummy-button">
          Get dummy credentials
        </button>
      </form>
    </div>
  );
};

export default Auth;

