const express=require('express')
const path=require('path')
const adminRoutes=require('./controllers/admin')
const bodyParser=require('body-parser')
const app=express()
const sequelize=require('./database')
const Product = require('./product')

app.use(bodyParser.urlencoded({extended:false}))
//app.use('/admin',adminRoutes)

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./','views','index.html'))
})
app.post('/',(req,res)=>{
    const product={
     name:req.body.name,
     email:req.body.email,
    mobile:req.body.mobile,
    }
    Product.create(product)
    .then(()=>{
        res.send('successfully submitted the data')
    })
    .catch((err)=>{
        console.log(err)
    })
})


sequelize.sync().then(result=>{
    //console.log(result)
    app.listen(3000)
})
.catch(err=>{
    console.log(err)
})