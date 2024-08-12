const express = require('express');
const { spotify } = require("nayan-server");

const app = express();
const PORT = process.env.PORT || 3000;

// Define the API endpoint
app.get('/spotify', async (req, res) => {
  const { name } = req.query; // Get the song name from the query parameters

  if (!name) {
    return res.status(400).json({ error: 'Please provide a song name' });
  }

  try {
    const data = await spotify(name);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data from Spotify' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
