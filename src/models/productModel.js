const mongoose = require('mongoose');
const productController= require("../controllers/productController")

const productSchema = new mongoose.Schema( {
    
    name:String,
	category:String,
	price:Number
    }, { timestamps: true });
    module.exports = mongoose.model('product', productSchema)

