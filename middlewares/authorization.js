const jwt = require('jsonwebtoken');

const tokenVerify = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || typeof authHeader !== 'string') {
      return res.status(401).json({ message: 'Authorization header is missing' });
    }

    if (!authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Authorization header must be "Bearer <token>"' });
    }

    const token = authHeader.slice(7).trim();

    if (!token) {
      return res.status(401).json({ message: 'Token is missing' });
    }

    const secret = process.env.TOKEN_KEY;
    if (!secret) {
      return res.status(500).json({ message: 'Server configuration error' });
    }

    const decoded = jwt.verify(token, secret);
    req.user = decoded;
    next();
  } catch (err) {
    if (err.name === 'JsonWebTokenError') {
      if (err.message === 'jwt malformed') {
        return res.status(401).json({ message: 'Malformed token' });
      }
      if (err.message === 'invalid signature') {
        return res.status(401).json({ message: 'Invalid token' });
      }
      return res.status(401).json({ message: err.message || 'Invalid token' });
    }
    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Token expired' });
    }
    next(err);
  }
};

module.exports = tokenVerify;
