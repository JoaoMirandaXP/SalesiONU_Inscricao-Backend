//Importação do módulo do banco de dados
const mongoose = require('mongoose')
//Formato da estruturação de uma entidade no banco de dados 
const DelSchemaAcnur = new mongoose.Schema({
	nome: String,
	pagamento: Boolean,
	email: String,
	delegacao: String,
	instituicao:String 
})

module.exports = mongoose.model('acnur', DelSchemaAcnur) 