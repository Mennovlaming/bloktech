const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Home')
})

app.get('/about', (req, res) => {
    res.send('About')
})

app.get('/login', (req, res) => {
    res.send('Login')
})

app.get('*', (req, res) => {
    res.send('Error')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
