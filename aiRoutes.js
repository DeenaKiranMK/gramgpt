const express = require('express');
const router = express.Router();
const { predictRevenue } = require('../controllers/aiController');

router.post('/revenue', predictRevenue);

module.exports = router;
