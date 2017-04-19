const Todo = require('./todo')

Todo.methods(['get', 'post', 'put', 'delete'])
//quando atualizar algum dado, ele vai receber o dado atualizado
Todo.updateOptions({new: true, runValidators: true})

module.exports = Todo