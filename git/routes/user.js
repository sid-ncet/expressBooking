const express=require('express')
const router=express.Router()
const cors=require('cors')
const path=require('path')
const Customer=require('../customer')
router.use(express.json());
router.use(cors())
router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../','views','index.html'))
})
router.post('/user',async(req,res)=>{
    try{
   let name=req.body.name
    let email=req.body.email;
    let mobile=req.body.mobile
    console.log(name,email,mobile)

    let data=await Customer.create({name:name, email:email, mobile:mobile})
        res.status(200).json({details: data})
    }catch(err){
        res.status(500).json({
            error:err
        })
    }
    })
router.get('/user',async(req,res)=>{
    try{
    const customer=await Customer.findAll();
    res.status(200).json({allCustomers: customer})
    }catch(err){ 
        res.status(500).json({
            error:err
        })
    }
})
router.delete('/delete/:id',async(req,res)=>{
    try{
    const uId=req.params.id;
    await Customer.destroy({where:{id: uId}})
    res.sendStatus(200);
    }catch(err){
        console.log(err)
        res.sendStatus(500).json(err)

    }

})
module.exports=router;