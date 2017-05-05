const express = require('express')
const axios = require('axios')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.post('/', (req, res) => {
  const API_KEY = '4195135e9c7034878d78c6f4d7f1f88d'
  const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`
  const lat = req.body.lat
  const lon = req.body.lon
  axios.get(`${ROOT_URL}&lat=${lat}&lon=${lon}`)
    .then(response => {res.send(response.data)})
})


app.listen(process.env.PORT || 8080, () => {
  console.log('listening on port: ',process.env.PORT || 8080)
})
