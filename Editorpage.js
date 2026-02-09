// src/Editorpage.js (In your React Project)
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Editorpage = () => {
    const [status, setStatus] = useState('');
    const token = localStorage.getItem('token');

    const handleEditRequest = async () => {
        try {
            const res = await axios.post('http://localhost:5000/api/editor/edit-content', {}, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setStatus(res.data.message);
            toast.success("Access Granted!");
        } catch (err) {
            toast.error("Unauthorized: Editors/Admins only");
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Editor Workspace</h1>
            <button onClick={handleEditRequest}>Verify Permissions</button>
            {status && <p>{status}</p>}
        </div>
    );
};

export default Editorpage;