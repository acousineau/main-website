const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hi there! This site is a work in progress! Come back soon 😏')
})

app.get('/teapot', (req, res) => {
  res.set('X-Teapot', 'Brew')
  res.status(418)
  res.send('I prefer coffee')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
