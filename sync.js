const {Motorista,Carga,Entrega,Funcionario} = require('./models/rel')
const conn = require('./db/conn')
async function syncDataBase(){
    try{
        await conn.sync({force:true})
        console.log('Tabelas sincronizadas')
    }catch(err){
        console.error('erro ao sincronizar tabelas',err)
    }finally{
        await conn.close()
        console.log('Banco fechado')
    }
}
syncDataBase()