import axios from 'axios';

const openaiService = {
  generatePlaylist: async (prompt) => {
    try {
      const response = await axios.post('/api/generate-playlist', { prompt });
      return response.data;
    } catch (error) {
      console.error('Error generating playlist:', error);
      throw error;
    }
  },
};

export default openaiService;
