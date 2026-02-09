// src/Adminpage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Adminpage = () => {
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const handleLogout = () => {
        localStorage.removeItem('token');
        toast.info("Logged out successfully");
        navigate('/login');
    };

    useEffect(() => {
        const fetchAdminData = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/admin/admin-dashboard', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setMessage(res.data.message);
                toast.success("Admin Access Granted!");
            } catch (err) {
                toast.error("Access Denied: Admins Only");
                navigate('/userpage');
            }
        };

        if (!token) {
            navigate('/login');
        } else {
            fetchAdminData();
        }
    }, [token, navigate]);

    return (
        <div style={{ padding: '40px', textAlign: 'center' }}>
            <h1>🔒 Admin Control Panel</h1>
            <button onClick={handleLogout}>Logout</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Adminpage;