const express = require('express');
const totalLadderCombinations = require('./utils/totalLadderCombinations');

const app = express();

app.get('/:number', (req, res) => {
  const { number } = req.params;
  const result = totalLadderCombinations(number);
  res.json({ result });
});

const port = process.env.PORT || 3000;
app.listen(port);
