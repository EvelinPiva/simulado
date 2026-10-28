const {DataTypes} = require('sequelize')
const db = require('../db/conn')

const Carga = db.define('carga',{
    codCarga:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idMotorista:{
        type: DataTypes.INTEGER,
        references:{
            model: 'motoristas',
            key: 'codMotorista'
        }
    },
    descricao:{
        type: DataTypes.STRING,
        allowNull: false
    },
    peso:{
        type: DataTypes.FLOAT(10,2),
        allowNull: false
    },
    volume:{
        type: DataTypes.STRING,
        allowNull: false
    },
    codRastreio:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    timestamps: false,
    tableName: 'cargas'
})
module.exports = Carga