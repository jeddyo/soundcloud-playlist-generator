import { Playlist } from '../models/index.js'; // Ensure you're using correct imports

// Define the getPlaylists function
const getPlaylists = async (req, res) => {
  try {
    const playlists = await Playlist.findAll({ where: { userId: req.user.id } });
    res.json(playlists);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Define the createPlaylist function
const createPlaylist = async (req, res) => {
  const { name, description } = req.body;
  try {
    const playlist = await Playlist.create({ name, description, userId: req.user.id });
    res.status(201).json(playlist);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Export both functions as part of a default export object
export default {
  getPlaylists,
  createPlaylist
};
