// ekrishi/backend/routes/welfareRoutes.js
const express = require('express');
const router = express.Router();
const { getWelfareData } = require('../controllers/welfareController');

router.get('/:aadhaar', getWelfareData);

module.exports = router;
