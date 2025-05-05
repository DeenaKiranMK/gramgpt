// ekrishi/backend/models/welfareModel.js
const db = require('../db');

exports.getWelfareBenefits = (aadhaar, callback) => {
  db.get('SELECT * FROM welfare WHERE aadhaar = ?', [aadhaar], (err, row) => {
    if (err) {
      return callback(err);
    }
    callback(null, row || {});
  });
};
