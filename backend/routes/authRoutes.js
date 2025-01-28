import express from 'express';
import SpotifyWebApi from 'spotify-web-api-node';
import 'dotenv/config';

const router = express.Router();

// Initialize Spotify API client
const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: process.env.SPOTIFY_REDIRECT_URI,
});

// Define the scope of access
const scopes = [
  'user-read-private',
  'user-read-email',
  'user-read-recently-played',
  'playlist-modify-public',
  'playlist-modify-private',
];

// Route to generate Spotify login URL
router.get('/login', (req, res) => {
  const authorizeURL = spotifyApi.createAuthorizeURL(scopes);
  res.redirect(authorizeURL); // Redirect user to Spotify's login page
});

export default router;
