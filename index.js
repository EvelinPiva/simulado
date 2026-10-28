const express = require('express')
const app = express()
const cors = require('cors')

const conn = require('./db/conn')
const PORT = 3000
const hostname = 'localhost'
require('./models/rel')
const motoristaController = require('./controller/motorista.controller')
const authController = require('./controller/auth.controller')
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors)

app.post('/motorista',motoristaController.cadastrar)


app.listen(PORT,hostname,()=>{
    console.log(`Servidor rodando em http://${hostname}:${PORT}`)
})