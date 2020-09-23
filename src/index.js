//importação de pacotes 
const express =  require('express')
const mongoose = require('mongoose')
const cors = require('cors')
//importação de scripts 
const routes = require('./routes.js')
//iniciando o server 
const app = express()
//utilizando json 
app.use(express.json())

// como rodar o server em qualquer lugar 
app.use(cors())

//adicionando as rotas a aplicação
app.use(routes)

//ligando com o banco de dados
mongoose.connect('mongodb+srv://root:2f422f@cluster0-tpikp.mongodb.net/SALESIONU?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.listen(3333)
