// ekrishi/backend/models/rationModel.js
const db = require('../db');

exports.getRationDetails = (callback) => {
  db.all('SELECT * FROM ration', [], (err, rows) => {
    if (err) {
      return callback(err);
    }
    callback(null, rows);
  });
};
