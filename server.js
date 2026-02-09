import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'; // Import CORS
import connectDB from './config/db.js';
import authRoutes from './routes/auth.js';
import adminRoutes from './routes/admin.js';
import editorRoutes from './routes/editor.js';
import profileRoutes from './routes/profile.js';
import taskRoutes from './routes/tasks.js';
// Load Config
dotenv.config();

// Initialize App and DB
const app = express();
connectDB();

// Middleware
app.use(cors()); // Enable CORS so React can talk to this server
app.use(express.json());

// --- ROUTES ---

// 1. Auth: http://localhost:5000/api/auth/signup & /login
app.use('/api/auth', authRoutes);

// 2. Admin: http://localhost:5000/api/admin/admin-dashboard
app.use('/api/admin', adminRoutes);

// 3. Editor: http://localhost:5000/api/editor/edit-content
app.use('/api/editor', editorRoutes);

//4.
app.use('/api/profile', profileRoutes);

// 5. Tasks: http://localhost:5000/api/tasks
app.use('/api/tasks', taskRoutes);
// A simple home route to verify the server is alive
app.get('/', (req, res) => {
    res.send('<h1>Server is up and running!</h1><p>The API is ready for requests.</p>');
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` Done Server running on port ${PORT}`));