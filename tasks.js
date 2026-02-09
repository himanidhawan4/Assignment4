// routes/tasks.js
import express from 'express';
import Task from '../models/taskModel.js';
import { authenticateToken } from '../middleware/authmw.js';

const router = express.Router();

// GET only tasks belonging to the logged-in user
router.get('/', authenticateToken, async (req, res) => {
    try {
        // Find tasks where the 'user' field matches the ID in the JWT
        const tasks = await Task.find({ user: req.user.id });
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: "Error fetching tasks" });
    }
});

// POST a new task linked to the logged-in user
router.post('/', authenticateToken, async (req, res) => {
    try {
        const newTask = new Task({
            title: req.body.title,
            description: req.body.description,
            user: req.user.id // Assign ownership automatically
        });
        await newTask.save();
        res.status(201).json(newTask);
    } catch (err) {
        res.status(400).json({ message: "Error creating task" });
    }
});

export default router;