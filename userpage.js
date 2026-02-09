import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Userpage = () => {
    const [tasks, setTasks] = useState([]);
    const [newTitle, setNewTitle] = useState('');
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const fetchTasks = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/tasks', {
                headers: { Authorization: `Bearer ${token}` }
            });
            setTasks(res.data);
        } catch (err) {
            if (err.response?.status === 403) {
                toast.error("Invalid token, Forbidden. Please login again.");
                navigate('/login');
            } else {
                toast.error("Error loading tasks");
            }
        }
    };

    useEffect(() => {
        if (!token) {
            toast.warn("Please login first");
            navigate('/login');
        } else {
            fetchTasks();
        }
    }, [token]);

    const handleAddTask = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/tasks',
                { title: newTitle },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setTasks([...tasks, res.data]);
            setNewTitle('');
            toast.success("Task added successfully!");
        } catch (err) {
            toast.error(err.response?.data?.message || "Failed to add task");
        }
    };

    // Corrected: handleLogout must be inside the component
    const handleLogout = () => {
        localStorage.removeItem('token');
        toast.info("Logged out successfully");
        navigate('/login');
    };

    return (
        <div style={{ padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1>User Dashboard</h1>
                <button onClick={handleLogout} style={{ backgroundColor: '#ff4444', color: 'white', padding: '10px' }}>
                    Logout
                </button>
            </div>

            <form onSubmit={handleAddTask}>
                <input
                    type="text"
                    value={newTitle}
                    placeholder="Enter task title..."
                    onChange={(e) => setNewTitle(e.target.value)}
                    required
                />
                <button type="submit">Add Task</button>
            </form>

            <hr />

            <h3>Your Tasks</h3>
            {tasks.length > 0 ? (
                <ul>
                    {tasks.map(task => (
                        <li key={task._id}>
                            <strong>{task.title}</strong> - {task.completed ? "Done" : "Pending"}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No tasks found. Create one above!</p>
            )}
        </div>
    );
};

export default Userpage;