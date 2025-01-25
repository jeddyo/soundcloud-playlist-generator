import express from 'express';
import cors from 'cors';
import { sequelize } from './models/index.js'; // Import sequelize from models
import userRoutes from './routes/userRoutes.js';
import authRoutes from './routes/authRoutes.js';
import playlistRoutes from './routes/playlistRoutes.js';
import 'dotenv/config';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/playlists', playlistRoutes);
app.use('/auth', authRoutes); // Add the auth routes here

// Sync the Sequelize models with the database
sequelize.sync({ force: false }) 
  .then(() => console.log('Database synchronized'))
  .catch((err) => console.error('Error syncing database:', err));

export default app;
