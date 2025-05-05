const axios = require('axios');

// This controller talks to the Python AI model
exports.predictRevenue = async (req, res) => {
  try {
    const response = await axios.post('http://localhost:5001/predict', req.body);
    res.json(response.data);
  } catch (err) {
    console.error('AI server error:', err.message);
    res.status(500).json({ error: 'Failed to get response from AI model', details: err.message });
  }
};
