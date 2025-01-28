import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET;

// Function to generate a token
export const generateToken = (userId) => {
  return jwt.sign({ id: userId }, secret, { expiresIn: '1h' }); // Token valid for 1 hour
};

// Middleware to verify a token
export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, secret);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid or expired token' });
  }
};

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; 
  if (!token) {
    return res.status(401).json({ message: 'Access denied. Token missing or invalid.' });
  }

  try {
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; 

    next(); 
  } catch (err) {
    
    if (err.name === 'JsonWebTokenError') {
      return res.status(403).json({ message: 'Invalid token.' });
    } else if (err.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Token expired. Please log in again.' });
    }
        
    res.status(500).json({ message: 'Internal server error' });
  }
};

export default authMiddleware; 