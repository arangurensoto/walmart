const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/dist'))

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/index.html'))
})

app.listen(process.env.PORT || 8080)
