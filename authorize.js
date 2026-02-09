import jwt from 'jsonwebtoken';

export const authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {
    const userRole = req.user.role; // This exists because authenticateToken ran first!

    if (!allowedRoles.includes(userRole)) {
      return res.status(403).json({ message: 'Access denied: insufficient permissions' });
    }
    next();
  };
};
// check if logged in user has right role to access particular route or resource