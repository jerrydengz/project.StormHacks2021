const express = require('express') // import express.js library 
const app = express()
const server = require('http').createServer(app)
const path = require('path')

// inside static folder (../static from index.js) look for an index.html page to load for the user
app.use(
  express.static( path.join(__dirname, '../static'))
)

app.get('/', (req, res, next) => {
  res.send('message')
})

const port = process.env.PORT || 8080

server.listen(port, () => {

  console.log('listening on: ', port)
})
