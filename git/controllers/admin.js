const Product=require('../product')
exports.addProduct=(req,res,next)=>{
    const name=req.body.name;
    const email=req.body.email;
    const mobile=req.body.mobile
    Product.create({
        name:name,
        email:email,
        mobile:mobile

    })
    .then(result=>{
        console.log(result)
    })
    .catch(err=>{
        console.log(err)
    })

}