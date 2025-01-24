const express = require("express");
const SpotifyWebApi = require("spotify-web-api-node");
require("dotenv").config();

const router = express.Router();

// Initialize Spotify API wrapper
const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: process.env.SPOTIFY_REDIRECT_URI,
});

// Get an access token
router.get("/auth", async (req, res) => {
  try {
    const data = await spotifyApi.clientCredentialsGrant();
    spotifyApi.setAccessToken(data.body.access_token);
    res.json({ accessToken: data.body.access_token });
  } catch (error) {
    console.error("Error authenticating with Spotify:", error);
    res.status(500).json({ error: "Failed to authenticate with Spotify" });
  }
});

// Search for playlists
router.get("/search", async (req, res) => {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ error: "Query parameter is required" });
  }

  try {
    const data = await spotifyApi.searchPlaylists(query);
    res.json(data.body);
  } catch (error) {
    console.error("Error searching for playlists:", error);
    res.status(500).json({ error: "Failed to search for playlists" });
  }
});

// Get a playlist's tracks by playlist ID
router.get("/playlist/:id/tracks", async (req, res) => {
  const { id } = req.params;

  try {
    const data = await spotifyApi.getPlaylistTracks(id);
    res.json(data.body);
  } catch (error) {
    console.error("Error retrieving playlist tracks:", error);
    res.status(500).json({ error: "Failed to retrieve playlist tracks" });
  }
});

module.exports = router;
