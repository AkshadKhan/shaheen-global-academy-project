// Middleware to verify JWT token
import dotenv from "dotenv";
import jwt from "jsonwebtoken"
dotenv.config();



const verifyToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  
  if (!token) {
    return res.status(403).json({ message: 'No token provided' });
  }
  
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    req.adminId = decoded.id;
    next();
  });
};

export default verifyToken;
