// ekrishi/backend/controllers/rationController.js
const { getRationDetails } = require('../models/rationModel');

exports.getRationData = (req, res) => {
  getRationDetails((err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to fetch ration data' });
    }
    res.json(data);
  });
};
