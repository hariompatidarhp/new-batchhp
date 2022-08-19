const UserModel = require("../models/UserModel.js")

/*const createUser = async function (req,res){
    let data = req.body
    let savedData = await UserModel.create(data)
res.send({msg: savedData})

}

const getUsersData = async function (req,res){
let allUsers = await UserModel.find()
res.send({msg:allUsers})
}

module.exports.createUser = createUser
module.exports.getUsersData = getUsersData


//part1
const createbooks = async function (req,res){
    let bookData = req.body
    let booksavedData = await UserModel.create(bookData)
res.send({msg: booksavedData})

}

const getbooksData = async function (req,res){
let allbooks = await UserModel.find()
res.send({msg:allbooks})
}*/
//part2
const createBook = async function (req,res){
    let data = req.body
    let frbooks = await UserModel.create(data).
    res.send({msg:frbooks})
    }

 const bookList = async function (req,res){
    let scbooks = await UserModel.find().select({bookName: 1, authoreName: 1,_id:0})
    res.send({msg:scbooks})
    }

  const getBooksInYear = async function (req,res){
    let newyear = req.quary.year
    let thrbooks = await UserModel.find({year:newyear}).
    res.send({msg:thrbooks})
    }
    const getParticularBooks=async function(req,res){
    
        let book=req.body.bookname
        let body=req.body.year
        let getAllbook=await UserModel.find({$or:[{bookname:{$eq:book}},{year:{$eq:body}}]})
        res.send({msg:getAllbook})
    }

    const getXINRBooks = async function (req,res){
    let ftbooks = await UserModel.find({"prices.indianPrice" : {$in : ["100INR","200INR","300INR"]}})
    res.send({msg:ftbooks})
    }

    const getRandomBooks = async function (req,res){
        let sebooks = await UserModel.find({$or: [{stockAvailable: true},{totalPages:{$gt:500}}]}).
        res.send({msg:sebooks})
        }

//module.exports.createbooks = createbooks
//module.exports.getbooksData = getbooksData
//part2
module.exports.createBook = createBook
module.exports.bookList = bookList
module.exports.getBooksInYear = getBooksInYear
module.exports.getParticularBooks = getParticularBooks
module.exports.getXINRBooks = getXINRBooks
module.exports.getRandomBooks = getRandomBooks
