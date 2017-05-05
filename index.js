const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
  const API_KEY = '4195135e9c7034878d78c6f4d7f1f88d'
  const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=imperial`
  const lat = req.query.lat
  const lon = req.query.lon
  axios.get(`${ROOT_URL}&lat=${lat}&lon=${lon}`)
    .then(response => {res.json(response.data)})
    .catch(err => res.status(400).send(err))
})


app.listen(process.env.PORT || 8080, () => {
  console.log('listening on port: ',process.env.PORT || 8080)
})
