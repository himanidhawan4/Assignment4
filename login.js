import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { jwtDecode } from 'jwt-decode'; // Using named import for v4.0.0

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });

            const { token } = res.data;
            localStorage.setItem('token', token);

            // Decode to get the user's name or role for a personalized toast
            const decoded = jwtDecode(token);
            toast.success(`Welcome back, ${decoded.role || 'User'}!`);

            navigate('/userpage');
        } catch (err) {
            // Display the specific error message from your auth.js logic
            const errorMsg = err.response?.data?.message || "Login failed. Please try again.";
            toast.error(errorMsg);
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Sign In</button>
        </form>
    );
};