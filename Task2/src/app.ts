// src/app.ts
import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import { authenticateJWT } from './auth';
import hotelsRouter from './routes/hotels';
import sequelize from './config/database';
import jwt from 'jsonwebtoken';
import { JWT_SECRET, PORT } from './config/config';

dotenv.config();
// Load environment variables from .env
const app = express();
// Enable JSON body parsing for incoming requests
app.use(express.json());

// POST /login – issue a JWT for valid credentials
app.post('/login', (req: Request, res: Response) => {
  const { username, password } = req.body;
  // Hardcoded example credentials for testing purposes
  if (username === 'admin' && password === 'parola123') {
    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } else {
    // Authentication failed
    res.status(401).json({ message: 'Authentication failed' });
  }
});

// GET / – simple health-check or welcome route
app.get('/', (req, res) => {
  res.send('Express/Sequelize API is up and running.');
});

// Mount the hotels router at /hotels
app.use('/hotels', hotelsRouter);

// Connect to the database and then start the server
sequelize.authenticate()
  .then(() => {
    console.log('Database connection established successfully');
    app.listen(PORT, () => console.log(`Server is listening on port ${PORT}.`));
  })
  .catch(err => console.error('Error connecting to the database:', err));
