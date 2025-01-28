const express = require("express");
const router = express.Router();
const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

// Initialize OpenAI API
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Route to generate a playlist based on a prompt
router.post("/generate-playlist", async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Generate a playlist for the following prompt: ${prompt}`,
      max_tokens: 150,
    });

    const playlist = response.data.choices[0].text.trim();
    res.json({ playlist });
  } catch (error) {
    console.error("Error interacting with OpenAI:", error);
    res.status(500).json({ error: "Failed to generate playlist" });
  }
});

module.exports = router;