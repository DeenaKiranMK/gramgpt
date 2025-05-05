// ekrishi/backend/models/farmerModel.js
const db = require('../db');

exports.getFarmerById = (id, callback) => {
  db.get('SELECT * FROM farmers WHERE id = ?', [id], (err, row) => {
    if (err) {
      return callback(err);
    }
    callback(null, row);
  });
};
