const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const question = req.body.question;

    const response = await fetch('http://localhost:11434/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'llama3',
        prompt: question,
        stream: false
      })
    });

    const data = await response.json();

    res.json({ answer: data.response });

  } catch (err) {
    res.json({ answer: "Local AI not running" });
  }
});

module.exports = router;
