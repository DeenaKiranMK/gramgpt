// ekrishi/backend/seedWelfareData.js
const db = require('./db');
const fs = require('fs');
const path = require('path');

const data = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'data/sampleWelfareData.json'), 'utf-8')
);

db.serialize(() => {
  const stmt = db.prepare(`
    INSERT OR REPLACE INTO welfare (aadhaar, pm_kisan, ujjwala, ayushman, last_updated)
    VALUES (?, ?, ?, ?, ?)
  `);

  data.forEach((entry) => {
    stmt.run(
      entry.aadhaar,
      entry.pm_kisan ? 1 : 0,
      entry.ujjwala ? 1 : 0,
      entry.ayushman ? 1 : 0,
      entry.last_updated
    );
  });

  stmt.finalize(() => {
    console.log('✅ Welfare data seeded successfully.');
  });
});
