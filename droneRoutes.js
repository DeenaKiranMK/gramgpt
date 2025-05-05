// ekrishi/backend/routes/droneRoutes.js
const express = require('express');
const router = express.Router();
const { bookDrone } = require('../controllers/droneController');

router.post('/book', bookDrone);

module.exports = router;
