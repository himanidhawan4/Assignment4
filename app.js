import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Login';
import Userpage from './Userpage';
import Adminpage from './Adminpage'; // Import your new Admin file
import Editorpage from './Editorpage'; // Add this once created

function App() {
    return (
        <Router>
            <div className="App">
                <ToastContainer position="top-right" autoClose={3000} />

                <Routes>

                    <Route path="/" element={<Navigate to="/login" />} />

                    <Route path="/login" element={<Login />} />
                    <Route path="/userpage" element={<Userpage />} />

                    <Route path="/admin-dashboard" element={<Adminpage />} />
                    <Route path="/editor-page" element={<Editorpage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;