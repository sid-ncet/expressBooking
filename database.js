const Sequelize=require('sequelize')
const sequelize=new Sequelize('hotel','root','sid1993@',{
  dialect:'mysql',
  host:'localhost'  
})
module.exports=sequelize