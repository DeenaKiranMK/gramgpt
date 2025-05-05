// ekrishi/backend/seedRationData.js
const db = require('./db');
const fs = require('fs');
const path = require('path');

const data = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'data/sampleRationData.json'), 'utf-8')
);

db.serialize(() => {
  const stmt = db.prepare(`
    INSERT INTO ration (id, farmer_name, aadhaar, family_size, ration_type, last_received)
    VALUES (?, ?, ?, ?, ?, ?)
  `);

  data.forEach((entry) => {
    stmt.run(
      entry.id,
      entry.farmer_name,
      entry.aadhaar,
      entry.family_size,
      entry.ration_type,
      entry.last_received
    );
  });

  stmt.finalize(() => {
    console.log('✅ Sample ration data inserted.');
  });
});
