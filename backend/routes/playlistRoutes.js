import express from 'express';
import playlistController from '../controllers/playlistController.js'; // Import default export
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

// Define routes using the imported functions from playlistController
router.get('/', authMiddleware, playlistController.getPlaylists);
router.post('/', authMiddleware, playlistController.createPlaylist);

export default router;
