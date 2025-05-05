// ekrishi/backend/controllers/revenueController.js
const { spawn } = require('child_process');

exports.predictRevenue = (req, res) => {
  const input = req.body;

  const python = spawn('python', ['../ai/revenue_planner.py', JSON.stringify(input)]);

  let output = '';
  python.stdout.on('data', (data) => {
    output += data.toString();
  });

  python.stderr.on('data', (err) => {
    console.error('Python Error:', err.toString());
  });

  python.on('close', (code) => {
    try {
      const result = JSON.parse(output);
      res.json(result);
    } catch (e) {
      res.status(500).json({ error: 'Failed to process AI response' });
    }
  });
};
