// src/auth.ts
import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

// JWT signing/verification secret
const jwtSecret = process.env.JWT_SECRET || 'ExzgOlbmDHWuvyfNXPMISFo44E7a+EYSH107oxG0100=';

/**
 * Middleware to authenticate requests using JWT.
 * Checks for the Authorization header and verifies the token.
*/ 
export const authenticateJWT: RequestHandler = (req, res, next) => {
  const authHeader = req.headers.authorization;
  // If no Authorization header is present, reject the request
  if (!authHeader) {
    res.status(401).json({ message: 'Authentication token missing' });
    return;
  }
  const parts = authHeader.split(' ');
  // Expect header in the format "Bearer <token>"
  if (parts.length !== 2 || parts[0] !== 'Bearer') {
    res.status(401).json({ message: 'Invalid Authorization format' });
    return;
  }
  const token = parts[1];
  try {
    // Verify the token using the secret
    jwt.verify(token, jwtSecret);
     // Token is valid, proceed to the next handler
    next(); 
  } catch {
    res.status(403).json({ message: 'Invalid token' });
  }
};
