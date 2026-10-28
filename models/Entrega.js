const {DataTypes} = require('sequelize')
const db = require('../db/conn')

const Entrega = db.define('entrega',{
    codEntrega:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idCarga:{
        type: DataTypes.INTEGER,
        references:{
            model: 'cargas',
            key: 'codCarga'
        }
    },
    cidadeDestino:{
        type: DataTypes.STRING,
        allowNull: false
    },
    status:{
        type: DataTypes.ENUM('ENTREGUE','TRANSITO'),
        allowNull: false
    },
    data:{
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    hora:{
        type: DataTypes.DATE,
        allowNull: false
    }
},{
    timestamps: false,
    tableName: 'entregas'
})
module.exports = Entrega