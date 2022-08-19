/*const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');
const{default:mongoose} =require("mongoose");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect("mongodb+srv://hariom8225:hariom@cluster0.srre1dc.mongodb.net/?retryWrites=true&w=majority" ,{
    
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )



app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});*/
const mongoose = require('mongoose')
const express = require('express');
var bodyParser = require('body-parser');

const DB = 'mongodb+srv://hariom8225:hariom@cluster0.srre1dc.mongodb.net/?retryWrites=true&w=majority'

const route = require('./routes/route.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(DB, {
    useNewurlParser : true,
    //useCreatIndex: true,
    useUnifiedTopology:true,
    //useFindAndModify:false,
}).then( () =>{
     console.log(`MongoDB is connected`);
}).catch( (err) => console.log(`no connection`));


app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});