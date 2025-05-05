// ekrishi/backend/controllers/welfareController.js
const { getWelfareBenefits } = require('../models/welfareModel');
const { validateAadhaar } = require('../services/aadhaarValidator');

exports.getWelfareData = (req, res) => {
  const { aadhaar } = req.params;

  if (!validateAadhaar(aadhaar)) {
    return res.status(400).json({ error: 'Invalid Aadhaar number' });
  }

  getWelfareBenefits(aadhaar, (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to retrieve welfare data' });
    }
    res.json(data);
  });
};
