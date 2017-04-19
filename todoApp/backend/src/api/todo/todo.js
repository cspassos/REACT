//mapear o objeto para o documento do mongo(banco de dados)
//mapeamento do banco de dados
const restful = require('node-restful')
const mongoose = restful.mongoose

const todoSchema = new mongoose.Schema({
    description: {type: String, require: true},
    done: {type: Boolean, require: true, default:false},
    createdAt: {type: Date, default: Date.now}
})

module.exports = restful.model('Todo', todoSchema)