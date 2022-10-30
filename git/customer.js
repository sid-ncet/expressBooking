const Sequelize=require('sequelize')
const sequelize=require('./database')
const customer=sequelize.define('customers',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true,
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    email:{
        type:Sequelize.STRING,
        unique:true,
        allowNull:false,
    },
    mobile:{
        type:Sequelize.STRING,
        unique:true,
        allowNull:false,
    }
    
})
module.exports=customer