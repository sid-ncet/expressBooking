const express=require('express')
const adminRoutes=require('./routes/user')
const bodyParser=require('body-parser')
const app=express()
app.use(express.json());
const sequelize=require('./database')
app.use(bodyParser.urlencoded({extended:false}))
app.use('/',adminRoutes)


sequelize.sync().then(result=>{
    //console.log(result)
    app.listen(3000)
})
.catch(err=>{
    console.log(err)
})