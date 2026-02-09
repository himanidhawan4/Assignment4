// routes/admin.js
import express from 'express';
import { authenticateToken } from '../middleware/authmw.js';
import { authorizeRoles } from '../middleware/authorize.js';

const router = express.Router();

router.get('/admin-dashboard', authenticateToken, authorizeRoles('admin'), (req, res) => {
    // We send JSON data, not HTML or React components
    res.json({ message: "Welcome to the Admin Dashboard!" });
});

export default router;