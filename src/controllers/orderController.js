const OrderModel= require("../models/orderModel")
const productModel=require("../models/productModel")
const UserModel=require("../models/userModel")

const createorder= async function (req, res,next) {
    let data = req.body
    let isFreeAppUser = req.headers.isFreeAppUser
    data["isFreeAppUser"]=false
    let finduserId = await UserModel.findById({_id:data.userId})
    if(!finduserId) return res.send({status:false, msg: "userId is invalid"})
    let findproductId = await UserModel.findById({_id:data.productId})
    if(!findproductId) return res.send({status:false, msg: "productId is invalid"}) 

    if(isFreeAppUser=="true"){
        data.amount=0
        data.isFreeAppUser=req.headers.isfreeappuser
      let createdUser=await OrderModel.create(data)
      res.send({msg:createdUser})
    }
    if(isFreeAppUser=="false"){
      let value1 = await productModel.findById(data.productId).select({price:1,_id:0})
      let value2=await UserModel.findById(data.userId).select({balance:1,_id:0})
 
         if(value2.balance<value1.price){
          res.send({msg:"user has not sufficient amount" })
         }else{
         data.amount=value1.price
         let first=await UserModel.findByIdAndUpdate(data.userId).updateMany({ $inc: { balance: - value1.price} })
         data.isFreeAppUser=req.headers.isfreeappuser
         let createdUser=await OrderModel.create(data)
         res.send({msg:createdUser})
        }
    }
}
    

module.exports.createorder= createorder