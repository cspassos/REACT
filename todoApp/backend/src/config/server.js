const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
//referencia ao arquivo do cors
const allowCors = require('./cors')

// urlencoded -> vai ser aplicado para as requisições que chegarem no meu servidor com esse parametro
server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors) //arquivo cors

server.listen(port, function() {
    console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server
