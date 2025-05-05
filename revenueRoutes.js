// ekrishi/backend/routes/revenueRoutes.js
const express = require('express');
const router = express.Router();
const { predictRevenue } = require('../controllers/revenueController');

router.post('/', predictRevenue);

module.exports = router;
