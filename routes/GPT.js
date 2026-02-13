const express = require('express');
const router = express.Router();
const OpenAI = require("openai");

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

router.post('/', async (req, res) => {
  try {
    const question = req.body.question;

    const response = await client.responses.create({
      model: "gpt-4.1-mini",
      input: question
    });

    const answer = response.output[0].content[0].text;

    res.json({ answer });

  } catch (err) {
    console.error("AI ERROR:", err.message);
    res.json({ answer: "AI error – check server console" });
  }
});

module.exports = router;
