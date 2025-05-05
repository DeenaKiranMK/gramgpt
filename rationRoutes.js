// ekrishi/backend/routes/rationRoutes.js
const express = require('express');
const router = express.Router();
const { getRationData } = require('../controllers/rationController');

router.get('/', getRationData);

module.exports = router;
