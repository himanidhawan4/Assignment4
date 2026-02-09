import express from 'express';
import { authenticateToken } from '../middleware/authmw.js';

const router = express.Router();

// Get User Profile
router.get('/', authenticateToken, (req, res) => {
    // req.user was attached by the authenticateToken middleware
    res.json({
        message: "Profile loaded successfully",
        user: req.user
    });
});

// IMPORTANT: This is the missing line
export default router;