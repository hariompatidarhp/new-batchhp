const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: String,
    author_id: {
        type: ObjectId,
        ref: "Author82"
    }, 
    price: Number,
    ratings: Number,
    publisher_id:{
        type: ObjectId,
        ref: "Publisher82" 
    },
    isHardCover:{
        default:false
    }


}, { timestamps: true });


module.exports = mongoose.model('LibraryBook82', bookSchema)
