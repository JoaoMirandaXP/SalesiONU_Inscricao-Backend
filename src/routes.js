//importação do roteador
const {Router} = require('express')
const routes = Router()
	

//importação da lógica do banco de dados 
const  DbController = require('./Controllers/DbController')
//Recebendo os schemas de cada comite 
const acnur = require('./model/DelegadoAcnur') 
const csnu  = require('./model/DelegadoCsnu')
const oms = require('./model/DelegadoOms')
//Importa os guias 
//const acnurpdf = fs.createReadStream("./files")
//const csnupdf = fs.createReadStream("./files")
//const omspdf = fs.createReadStream("./files")
//const imprensapdf = fs.createReadStream("./files")
//relevância ativa dos comitẽs
var relevancia = "1"


routes.post('/cadastro/:comite',async(request,response) => {
	//Isolar esse fragmento do código em UpdateController(request,response)
	
	//constante da rota 
	const {comite} = request.params
	//Efetivação das rotas no banco de dados 
	if(comite=="acnur"){
		console.log("Cadastro Acnur")
		//cadastro no banco de dados
		return response.json(await DbController.acnurDBUpdate(request,comite))
	}
	else if(comite=="csnu"){
		console.log("Cadastro Csnu")
		//cadastro no banco de dados
		return response.json(await DbController.csnuDBUpdate(request,comite))
	}
	else if(comite=="oms"){
		console.log("Cadastro Oms")
		//cadastro no banco de dados
		return response.json(await DbController.omsDBUpdate(request,comite))
	}
	else{
		console.log("Rota não encontrada")
	}
	 
	return response.json({"message": "vai dar certo meno"})
})
routes.get('/cadastro/:comite', async (request,response)=>{
	const {comite}= request.params 
	if(comite=="acnur"){
		console.log("Busca Acnur")
		//Busca no banco de dados
		return response.json(await DbController.acnurDBIndex(relevancia))
	}
	else if(comite=="csnu"){
		console.log("Busca Csnu")
		//Busca no banco de dados
		return response.json(await DbController.csnuDBIndex(relevancia))
	}
	else if(comite=="oms"){
		console.log("Busca Oms")
		//Busca no banco de dados
		return response.json(await DbController.omsDBIndex(relevancia))
	}
	else{
		console.log("Rota não encontrada")
	}
	 
	return response.json({"message": "vai dar certo meno"})

})
routes.get('/cadastro',async (request,response)=>{
	return response.json({
		delegacao:"Aguarde um momento"
	})
})

routes.post("/setup", async (request,response) =>{
	const {nome, pagamento,relevancia, email, delegacao} = request.body 
	console.log(await acnur.create({
		nome,
		pagamento,
		relevancia,
		email,
		delegacao
	}))
	console.log(await csnu.create({
		nome,
		pagamento,
		relevancia,
		email,
		delegacao
	}))	
	console.log(await oms.create({
		nome,
		pagamento,
		relevancia,
		email,
		delegacao
	}))
	return response.json({"status":"Setup concluido"})
})

routes.get('/',(req,resp) => {
	return resp.send(
        `<h1>Servidor Online</h1>
		<h2>Relevância ativa dos comites:${relevancia}</h2>
		`
		)
})
routes.post('/',(req,resp)=>{
	relevancia = req.body.relevancia
	return resp.send("Okay Bro")
})

module.exports = routes


