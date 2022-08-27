const productModel= require("../models/productModel")

const createproduct= async function (req, res,next) {
    let product = req.body
        let Saveproduct = await productModel.create(product);
        res.send({msg:Saveproduct})
        next()
    }

module.exports.createproduct= createproduct