const { populate } = require("../models/authorModel")
const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const PublisherModel= require("../models/PublisherModel")

const createBook = async function (req,res){
let book = req.body
if(book.author_id){
let demo = authorModel.findOne({_id:{$eq:book.author_id}})
if(demo){
    if(book.publisher_id){
        let app = await PublisherModel.findOne({_id:{$eq:book.publisher_id}})
        if(app){
            let created = await bookModel.create(book)
            res.send({data:created})
         }else{
            res.send({msg:"publisher_id is not valide"})
         }
    }else{
        res.send({msg:"publisher_id are required"})
    }
}else{
    res.send({msg:"author_id is not present"})
}
}else{
    res.send({msg:"author_id detais are required"});
}
}


//const Bookwithauthor= async function (req, res) {
//let authobook = await bookModel.find().populate(['author','Publisher'])
//res.send({data: authobook})
//}




/*const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}*/

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author_id').populate('publisher_id')
    res.send({data: specificBook})

}

const updateprice= async function (req, res) {
    let data = await authorModel.find({"ratings":{$gt:3.5}}).select({_id:1})
    let a = await bookModel.find({"author":data}).updateMany({$inc:{price:10}})
    res.send({msg:a})

}
const books= async function (req, res) {
    let data = await authorModel.find({"isHardCover":true})
    res.send({msg:data})
}
module.exports.createBook= createBook
//module.exports.Bookwithauthor= Bookwithauthor

//module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.books = books
module.exports.updateprice = updateprice