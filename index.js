// ekrishi/backend/index.js
const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./db');

const rationRoutes = require('./routes/rationRoutes');
const welfareRoutes = require('./routes/welfareRoutes');
const revenueRoutes = require('./routes/revenueRoutes');
const droneRoutes = require('./routes/droneRoutes');

app.use(cors());
app.use(express.json());

// Route handlers
app.use('/api/ration', rationRoutes);
app.use('/api/welfare', welfareRoutes);
app.use('/api/revenue', revenueRoutes);
app.use('/api/drone', droneRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
