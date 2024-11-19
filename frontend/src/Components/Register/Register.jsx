import React, { useState } from 'react'
import axios from 'axios';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [registerForm, setRegisterForm] = useState(false);
    const [loginForm, setLoginForm] = useState(false);
    const handleRegisterSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:4000/register', {
                username,
                email,
                phone,
                password
            });
            setRegisterForm(false);
            setLoginForm(true);
        } catch (error) {
            console.error('Error during registration:', error);
        }
    };
    return (
        <div className="form-container">
            <h2>Register</h2>
            <form>
                <label>Name:</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                <br />
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <br />
                <label>Phone:</label>
                <input type="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                <br />
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <br />
                <button type="button" onClick={handleRegisterSubmit}>Register</button>
            </form>
        </div>
    )
}

export default Register