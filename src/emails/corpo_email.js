const url_online = ""

module.exports={
    Email(request,comite){
        let = mensagem = `
        <!DOCTYPE html>  

        <head>
            <style>
            html,body{
            text-align:center;
            margin:auto;
            max-width:1000px;
            }
            #info{
            background-color:rgb(240, 248, 255);
            width:40%;
            margin: 20px auto;
            border:5px solid rgb(220, 228, 235);
                
            }
            #info,keys h3{
            color:#1a1a1a;	
            }
            #keys{
            background-color:rgb(240, 248, 255);
            width:40%;
            margin: 20px auto;
            border:5px solid rgb(220, 228, 235);
            }
            p{
            font-size:10pt;
            color:#111;
            }
            </style>
        </head>
        <h1>Olá, ${request.body.nome},</h1> 
        
                Caso o senhor delegado tenha recebido este email, quer dizer que a sua inscrição acabou de ser confirmada, então seja muito bem-vindo a salesiONU 2020. 
        
                <br/>
        
            Antes de prosseguirmos, atente-se para as seguintes informações e confira se correspondem corretamente aos dados fornecidos no momento da inscrição.
        
                <br/>
        
                <div id="info">
        
                    <h3>Nome: ${request.body.nome}</h3>
        
                    <br/>
        
                    <h3>Delegação: ${request.body.delegacao}</h3>
        
                    <br/>
        
                    <h3>Comitê: ${comite.toUpperCase()}</h3>
        
                    <br/>
        
                    <h3>Email: ${request.body.email}</h3>
        
                </div>
                
            <br/>
            Caso haja alguma incoerência,  envie imediatamente um email para <b><a href="mailto:salesionu@gmail.com">salesionu@gmail.com</a></b>, e no campo
        
        "assunto" deve estar escrito:<b>"Reclamações referente a inscrição"</b>, e no corpo do texto o motivo da reclamação.
        
            <br/>
        
        
        
            <h2>Agora, fique atento a alguns avisos importantes:</h2>
        
            <ul style="text-align:left;">
        
                <li>Não se esqueça de registrar uma conta no Microsoft teams (a forma e a orientação do processo de criação 
        
        está no guia de regras).</li>
        
                <li>O Guia de Regras e os Guias de Estudo estão no site da salesiONU.</li>
        
                <li>Em alguns dias, chegará no gmail utilizado na inscrição (use o mesmo email para a inscrição no teams, quanto na SalesiONU), uma mensagem do microsoft teams, com o acesso à sala do teams de seu comitê. É extremamente necessário que este email seja acessado, e seja feito o que ele exigir, pois esta sala será o veículo oficial de comunicação entre a organização da SalesiONU e os participantes.</li>
        
                <li>Caso seja necessário sanar uma alguma dúvida referente ao evento, envie um email para salesionu@gmail.com, no assunto deve estar "dúvidas sobre a simulação", ou envie a mensagem por meio dos chats individuais, do teams.</li>
        
            </ul>
        
            Segue os emails de cada comitê:
        
            <ul style="list-style: none;">
        
                <li>- <a href="mailto:csnu2020@gmail.com">csnu2020@gmail.com</a></li>
        
                <li>- <a href="mailto:salesionuoms2020@gmail.com">salesionuoms2020@gmail.com</a></li>
        
                <li>- <a href="mailto:acnursalesionu2020@gmail.com">acnursalesionu2020@gmail.com</a></li>
        
            </ul>
            <div style="text-align:left;margin:0 0 0 20px;" >
            Cordialmente,
            <br/><br/>
        
        
            Giovana Cursino<br/>
        
            Mariana Soares <br/>
        
            Beatriz Adami 
            </br>
            </div>
            
        
        
        
            <p>Mensagem automática não responda esse email</p>`
        return mensagem
    },
    EmailImprensa(request,comite,keys){
        let mensagem =`
<!DOCTYPE html>  

<head>
	<style>
	html,body{
	text-align:center;
	margin:auto;
	max-width:1000px;
	}
	#info{
	background-color:rgb(240, 248, 255);
	width:40%;
	margin: 20px auto;
	border:5px solid rgb(220, 228, 235);
		
	}
	#info,keys h3{
	color:#1a1a1a;	
    }
    #keys{
    background-color:rgb(240, 248, 255);
    width:40%;
    margin: 20px auto;
    border:5px solid rgb(220, 228, 235);
    }
    p{
    font-size:10pt;
    color:#111;
    }
	</style>
</head>
<h1>Olá, ${request.body.nome},</h1> 

        Caso o senhor delegado tenha recebido este email, quer dizer que a sua inscrição acabou de ser confirmada, então seja muito bem-vindo a salesiONU 2020. 

        <br/>

	Antes de prosseguirmos, atente-se para as seguintes informações e confira se correspondem corretamente aos dados fornecidos no momento da inscrição.

        <br/>

        <div id="info">

            <h3>Nome: ${request.body.nome}</h3>

            <br/>

            <h3>Delegação: ${request.body.delegacao}</h3>

            <br/>

            <h3>Comitê: ${comite.toUpperCase()}</h3>

            <br/>

            <h3>Email: ${request.body.email}</h3>

        </div>
        <div>
            E como redator(a) da imprensa,para acessar o site do seu respectivo jornal hospedado em <a href="${url_online}">${comite}</a> suas credenciais são as seguintes:
            <div id="keys">
                    <h3>Usuário: ${keys[0]}</h3>
                    <br/>
                    <h3>Senha: ${keys[1]}</h3>
        
                </div>
            É recomendado que se houver uma senha que considera mais segura o mais confortável de ser utlizada, ela seja substituida no site, bem como o usuário e Nome(que aparecerá nas suas postagens como redator)
            Para mais informações sobre funcionamento veja arquivo anexo.
            <br/>
        </div>
              
	<br/>
	Caso haja alguma incoerência,  envie imediatamente um email para <b><a href="mailto:salesionu@gmail.com">salesionu@gmail.com</a></b>, e no campo

"assunto" deve estar escrito:<b>"Reclamações referente a inscrição"</b>, e no corpo do texto o motivo da reclamação.

	<br/>



	<h2>Agora, fique atento a alguns avisos importantes:</h2>

	<ul style="text-align:left;">

		<li>Não se esqueça de registrar uma conta no Microsoft teams (a forma e a orientação do processo de criação 

está no guia de regras).</li>

		<li>O Guia de Regras e os Guias de Estudo estão no site da salesiONU.</li>

		<li>Em alguns dias, chegará no gmail utilizado na inscrição (use o mesmo email para a inscrição no teams, quanto na SalesiONU), uma mensagem do microsoft teams, com o acesso à sala do teams de seu comitê. É extremamente necessário que este email seja acessado, e seja feito o que ele exigir, pois esta sala será o veículo oficial de comunicação entre a organização da SalesiONU e os participantes.</li>

		<li>Caso seja necessário sanar uma alguma dúvida referente ao evento, envie um email para salesionu@gmail.com, no assunto deve estar "dúvidas sobre a simulação", ou envie a mensagem por meio dos chats individuais, do teams.</li>

	</ul>

	Segue os emails de cada comitê:

	<ul style="list-style: none;">

		<li>- <a href="mailto:csnu2020@gmail.com">csnu2020@gmail.com</a></li>

		<li>- <a href="mailto:salesionuoms2020@gmail.com">salesionuoms2020@gmail.com</a></li>

		<li>- <a href="mailto:acnursalesionu2020@gmail.com">acnursalesionu2020@gmail.com</a></li>

	</ul>
	<div style="text-align:left;margin:0 0 0 20px;" >
	Cordialmente,
	<br/><br/>


	Giovana Cursino<br/>

	Mariana Soares <br/>

	Beatriz Adami 
	</br>
	</div>
	



	<p>Mensagem automática não responda esse email</p>`
        return mensagem
    }
}