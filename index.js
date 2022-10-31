module = require('./words');
const PORT = process.env.PORT || 8000
const express = require('express')
const app = express()

let words = module.words;

// the API resposne
app.get("/", (req, res) => {
    res.json({ response: `${words[Math.floor(Math.random() * words.length)]}` })
})

// the listening
app.listen(PORT, () => console.log(`https://localhost:${PORT}`))