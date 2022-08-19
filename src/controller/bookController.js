const { count } = require("console")
const bookModel = require("../models/bookModel")


/*const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBooksData= async function (req, res) {
    let allBooks= await BookModel.find( {authorName : "HO" } )
    console.log(allBooks)
    if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
    else res.send({msg: "No books found" , condition: false})
}


const updateBooks= async function (req, res) {
    let data = req.body // {sales: "1200"}
    // let allBooks= await BookModel.updateMany(   
    //     { author: "SK"} , //condition
    //     { $set: data } //update in data
    //  )
    let allBooks= await BookModel.findOneAndUpdate( 
        { authorName: "ABC"} , //condition
        { $set: data }, //update in data
        { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
     )
     
     res.send( { msg: allBooks})
}

const deleteBooks= async function (req, res) {
    // let data = req.body 
    let allBooks= await BookModel.updateMany( 
        { authorName: "FI"} , //condition
        { $set: {isDeleted: true} }, //update in data
        { new: true } ,
     )
     
     res.send( { msg: allBooks})
}




// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE



module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.updateBooks= updateBooks
module.exports.deleteBooks= deleteBooks */

const createbook = async function(req,res){
    let data = req.body
    let saveData = await bookModel.create(data);
    res.send({msg:saveData})
    }
    module.exports.createbook=createbook

const findauthor = async function (req, res) {
    let book = await bookModel.findOne({ name : "Two states" }, { $set: { price : 100} } , { new : true } ).select({ _id : 0,author_id : 1 }) 
    let updatePrice = book.price
    let author = await authorModel.findOne({author_id:book.author_id})
    let author_name = author.author_name
    res.send({author:author_name,price:updatePrice})
     }
     module.exports.findauthor= findauthor

const findPrice =async function(req,res){
let data=await bookModel.find({price:{$gte:50},price:{$lte:100}}).select({author_id:1,_id:0})
const unique = [...new Set(data.map(item=>item.author_id))]
let allData = await authoreModel.find({author_id:{$in:unique}}).select({auther_name:1,_id:0})
res.send({msg:allData})
}
module.exports.findPrice= findPrice