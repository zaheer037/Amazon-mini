import React from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';
import { useState } from 'react';

const Login = () => {
    const [loginForm, setLoginForm] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const handleLoginSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:4000/login', {
        email,
        password
      });
      setCurrentUser(response.data.user);
      setLoggedIn(true);
      setLoginForm(false);
    } catch (error) {
      console.error('Error during login:', error);
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: 'Incorrect username or password. Please try again.',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK',
        background: '#f2f2f2',
        backdrop: `rgba(0, 0, 0, 0.4)`,
        customClass: {
          popup: 'styled-alert-popup', // Optional: Add custom styles using CSS
        },
      });
    }
  };
  return (
    <div className="form-container">
        <h2>Login</h2>
        <form>
              <label>Email:</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <br />
              <label>Password:</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <br />
              <button type="button" onClick={handleLoginSubmit}>Login</button>
        </form>
    </div>
  )
}

export default Login