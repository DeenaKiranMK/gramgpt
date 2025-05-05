// ekrishi/backend/db.js
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, 'ekrishi.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) console.error('SQLite Connection Error:', err.message);
  else console.log('Connected to SQLite database ✅');
});

module.exports = db;
