require("dotenv").config();
console.log(process.env.OPENAI_API_KEY);

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const gptRoute = require('./routes/GPT');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/gpt', gptRoute);

app.get('/', (req, res) => {
  res.render('index');
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running → http://localhost:${PORT}`));

