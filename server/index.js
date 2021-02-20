const express = require('express')
const app = express()
const server = require('http').createServer(a)
const path = require('path')

app.use(
  express.static( path.join(_dirname, '/static'))
)

app.get('/', (req, res, next) => {
  res.send('message')
})

const port = process.env.PORT || 3000

server.listen(port, () => {

  console.log('listening on: ', port)
})
