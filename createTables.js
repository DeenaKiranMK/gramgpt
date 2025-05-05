// ekrishi/backend/createTables.js
const db = require('./db');

db.serialize(() => {
  // Ration Table
  db.run(`
    CREATE TABLE IF NOT EXISTS ration (
      id INTEGER PRIMARY KEY,
      farmer_name TEXT,
      aadhaar TEXT,
      family_size INTEGER,
      ration_type TEXT,
      last_received TEXT
    )
  `);

  // Welfare Table
  db.run(`
    CREATE TABLE IF NOT EXISTS welfare (
      aadhaar TEXT PRIMARY KEY,
      pm_kisan BOOLEAN,
      ujjwala BOOLEAN,
      ayushman BOOLEAN,
      last_updated TEXT
    )
  `);

  // Farmers Table
  db.run(`
    CREATE TABLE IF NOT EXISTS farmers (
      id INTEGER PRIMARY KEY,
      name TEXT,
      aadhaar TEXT,
      village TEXT
    )
  `);

  console.log('✅ Tables created successfully.');
});
