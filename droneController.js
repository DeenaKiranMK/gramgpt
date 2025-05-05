// ekrishi/backend/controllers/droneController.js
const { syncToFirebase } = require('../services/firebaseSync');

exports.bookDrone = (req, res) => {
  const bookingData = req.body;

  // You can also store this in SQLite if needed
  syncToFirebase('droneBookings', bookingData)
    .then(() => {
      res.status(200).json({ message: 'Drone booking synced successfully' });
    })
    .catch((err) => {
      res.status(500).json({ error: 'Firebase sync failed', details: err.message });
    });
};
