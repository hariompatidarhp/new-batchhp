const mongoose = require('mongoose');

/*const userSchema = new mongoose.Schema( {
    firstName: String,
    lastName: String,
    mobile: {
        type: String,
        unique: true,
        required: true
    },
    emailId: String,
    gender: {
        type: String,
        enum: ["male", "female", "LGBTQ"] //"falana" will give an error
    },
    age: Number,
    // isIndian: Boolean,
    // parentsInfo: {
    //     motherName: String,
    //     fatherName: String,
    //     siblingName: String
    // },
    // cars: [ String  ]
}, { timestamps: true })

//part1

const bookSchema =new mongoose.Schema({
    bookName:{
        type: String,
        unique: true,
        required: true
    },
    authorName:{
    
        type: String,
        unique: true,
        required: true,
        

    },
    
    category:{
        type:String,
        enum:["history","funny","runner","sports"]

    },
    year:String
        
    
},  { timestamps: true });*/

//part2

const bookSchema =new mongoose.Schema({
    bookName:{
        type:String,
        required:true
    },
    authorName:String,
    tags:[String],
    year:{type:Number,default:2021},
    prices:{
    indianPrice:String,
    europePrice:String
     },
    totalPages:Number,
    stockAvailable:Boolean
    
},{ timestamps: true });       

//module.exports = mongoose.model('User', userSchema) //users
module.exports=mongoose.model('rupla', bookSchema)
//module.exports=mongoose.model('rupla', bookModel)












