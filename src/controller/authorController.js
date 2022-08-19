const {count} = require("console")
const authorModel = require("../models/authorModel")

//create auther
const createAuthor = async function(req,res){
let data = req.body
let saveData = await authorModel.create(data);
res.send({msg:saveData})
}
module.exports.createAuthor=createAuthor



//get auther id by "Chetan Bhagat"
const getAuthorId = async function(req,res){
const getId = await authorModel.find({auther_name:"Chetan Bhagat"}).select({author_id:1,_id:0})
const bookList = await bookModel.find(getId[0])
res.send(bookList)
}
module.exports.getAuthorId=getAuthorId