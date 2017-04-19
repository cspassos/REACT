const express = require('express')//pega referencia do express

module.exports = function(server){

//para chamar o routes basca colocar /api
const router = express.Router()
server.use('/api', router)

// TODO Routes
const todoService = require('../api/todo/todoService')
todoService.register(router, '/todos')
}