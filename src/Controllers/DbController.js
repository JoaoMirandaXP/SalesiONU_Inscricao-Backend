//Recebendo os schemas de cada comite 
const acnur = require('../model/DelegadoAcnur') 
const csnu  = require('../model/DelegadoCsnu')
const oms = require('../model/DelegadoOms')
const emailController = require('../Controllers/emailController')

module.exports = {

	async acnurDBUpdate(request,comite){
		const {nome, pagamento, email,delegacao,instituicao} = request.body 
		console.log(request.body)
		let acnurDB = {}
		if(await acnur.exists({
			"pagamento": false,
			"delegacao": delegacao
		})){
			acnurDB = await acnur.updateOne({'delegacao': delegacao},{
				'$set':{
					nome,
					pagamento,
					email,
					instituicao
				}
			})
			console.log(acnurDB)
			emailController.enviarEmail(request,comite)
		}
		else{
			console.log("Hmm parece que essa delegação já foi escolhida")
		}

		return acnurDB 
	},
	async csnuDBUpdate(request,comite){
		const {nome, pagamento, email,delegacao,instituicao} = request.body 
		let csnuDB = {}
		if(await csnu.exists({
			"pagamento": false,
			"delegacao": delegacao
		})){
			csnuDB = await csnu.updateOne({'delegacao': delegacao},{
				'$set':{
					nome,
					pagamento,
					email,
					instituicao
				}
			})
			emailController.enviarEmail(request,comite)
			console.log(csnuDB)
		}
		else{
			console.log("Hmm parece que essa delegação já foi escolhida")
		}
		return csnuDB
	},
	async omsDBUpdate(request,comite){
		const {nome, pagamento,email,delegacao,instituicao} = request.body 
		let omsDB = {}
		if(await oms.exists({
			"pagamento": false,
			"delegacao": delegacao
		})){
			omsDB = await oms.updateOne({'delegacao': delegacao},{
				'$set':{
					nome,
					pagamento,
					email,
					instituicao
				}
			})
			emailController.enviarEmail(request,comite)
			console.log(omsDB) 
		}
		else{
			console.log("Hmm parece que essa delegação já foi escolhida")
		}
		return omsDB
	},
	async acnurDBIndex(relevancia){
		const delegacoes = await acnur.find({
			"pagamento": false,
			"relevancia":relevancia
		})
		// console.log(delegacoes)
		return delegacoes
	},
	async csnuDBIndex(relevancia){
		const delegacoes = await csnu.find({
			"pagamento":false,
			"relevancia":relevancia
		})
		// console.log(delegacoes)
		return delegacoes
	},
	async omsDBIndex(relevancia){
		const delegacoes = await oms.find({
			"pagamento": false,
			"relevancia":relevancia
		})
		// console.log(delegacoes)
		return delegacoes
	}

}