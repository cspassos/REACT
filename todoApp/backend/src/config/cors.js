//recebbe tres parametros requisição resposta e o next
//Acessar o cabeçalho do browser e informar o que vai poder ser enviado
module.exports = function(req, res, next){
    res.header('Access-Control-Allow-Origin','*')//permite asterisco *
    res.header('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept')
    next()//para continuar o fluxo da aplicação
}