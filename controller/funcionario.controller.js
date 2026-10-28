const Funcionario = require('../models/Funcionario')

const cadastrar = async(req,res)=>{
    const valores = req.body
    if(!valores.nome || !valores.email || !valores.senha){
        return res.status(400).json({message: 'Os campos são obrigatórios'})
    }
    
}