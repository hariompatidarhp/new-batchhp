const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const moment = require('moment');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://hariom8225:hariom@cluster0.srre1dc.mongodb.net/ipware?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


app.use (
    function (req, res, next) {
        var currentdate = new Date(); 
        var datetime =  currentdate.getFullYear() + "-"
                + currentdate.getDate()  + "-" 
                + (currentdate.getMonth()+1) + " , "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
        let ipAddress = req.ip;
        let url = req.originalUrl
        console.log(datetime+","+ipAddress+","+url)
        next();
    })
  
   // let day = moment().format('YYYY-MM-DD,HH:mm:ss');
app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
