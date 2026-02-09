// routes/editor.js
import express from 'express';
import { authenticateToken } from '../middleware/authmw.js';
import { authorizeRoles } from '../middleware/authorize.js';

const router = express.Router();

// The Backend only sends JSON data
router.post('/edit-content', authenticateToken, authorizeRoles('editor', 'admin'), (req, res) => {
  res.json({ message: 'Content editing allowed for editors and admins.' });
});

export default router;