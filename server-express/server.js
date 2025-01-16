const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Express!')
})

// Export the Express app
module.exports = app;