const Motorista = require('../models/Motorista')
const CryptoJS = require('crypto-js')
const CHAVE_SECRETA = 'segredo'

const cadastrar = async(req,res)=>{
    const valores = req.body
    if(!valores.nome || !valores.cnh || !valores.cpf || !valores.telefone){
        return res.status(400).json({message: 'Os campos são obrigatórios'})
    }
    if(valores.cpf.lenght !==11){
        return res.status(400).json({message: 'O CPF deve conter 11 dígitos'})
    }

    try{
        const cpfCriptografado = CryptoJS.AES.encrypt(valores.cpf, CHAVE_SECRETA).toString()

        await Motorista.create({
            nome: valores.nome,
            cnh: valores.cnh,
            cpf: cpfCriptografado,
            telefone: valores.telefone
        })
        return res.status(201).json({message: 'motorista cadastrado'})
    }catch(err){
        console.error('erro ao cadastrar motorista',err)
        return res.status(500).json({message: 'erro ao cadastrar o motorista'})
    }
}
const listar = async(req,res)=>{
    
}
module.exports = {cadastrar}