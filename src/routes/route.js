const express = require('express');

const router = express.Router();
const UserModel= require("../models/UserModel.js")
const bookModel= require("../models/bookModel.js")
const authorModel= require("../models/authorModel.js")
const UserController = require("../controller/UserController")
const bookController = require("../controller/bookController")
const authorController = require("../controller/authorController")


/*let persons =[
    {
        name: "PK",
        age: 10,
        votingStatus: false
    },
    {
        name: "SK",
        age: 20,
        votingStatus: false
    },
    {
        name: "AA",
        age: 70,
        votingStatus: false
    },
    {
        name: "SC",
        age: 5,
        votingStatus: false
    },
    {
        name: "HO",
        age: 40,
        votingStatus: false
    },

]
router.post("/getvotingstatus",function(req,res){
let votingAge = req.query.age
let ElegiblePerson =[]
for (i=0; i<persons.length; i++){
    let personAge = persons[i].age;
    if(personAge > votingAge){
     persons[i].votingStatus = true;
}
}
ElegiblePerson = persons.filter((person) => person.age > votingAge);
res.send(ElegiblePerson)
});



let players =
   [
       {
           "playersName": "manish",
           "bookings":"11",
           "bookingId":"123",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
        }, 
       {
           "playersName": "gopal",
           "bookings":"12",
           "bookingId":"456",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ],
       },
       {
           "playersName": "lokesh",
           "bookings":"13",
           "bookingId":"789",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ],
       },
   ]
  //problem 1
   router.post('/players', function (req, res) {

       let details= req.body
       let detailsName = details.playersName
       let isNamerepeated = false
       for (let i=0; i<players.length; i++){
        if (players[i].playersName == detailsName){
            isNamerepeated = true;
            break
        }
       }
       if (isNamerepeated){
        res.send("name is already exist")
       }else{
        players.push(details)
        res.send(players)
       }
       
   })
   //problem 2
   router.post('/players/playersName/bookings/bookingId', function (req, res) {

    let details= req.body
    let detailsName = details.playersName
    let bookingId = false
    
    for (let i=0; i<players.length; i++){
     if (players[i].playersName == detailsName){
         bookingId= true;
         break
     }
    }
    
    if (bookingId){
     res.send("bookingId is already repeated")
    }else{
     players.push(details)
     res.send(players)
    }
    
})

   


router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

//1
router.get('/movies',function(req,res){
    let movies = ["ghatak","indian","dhol","hungama"]
console.log("hariom")
    res.send(movies)
});

//2
router.get("/movies/:indexNumber", function(req, res){
    const movies = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
    console.log(req.params.indexNumber)
    let movieIndex = req.params.indexNumber
    let requiredMovie = movies[movieIndex]
    res.send(requiredMovie)
});

//3
router.get("/movies/:indexNumber", function(req, res){
    const movies = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
    console.log(req.params.indexNumber)
    let movieIndex = req.params.indexNumber
    if(movieIndex<0 || movieIndex>=movies.length) {
        return res.send('The index value is not correct, Please check the it')
    }

    let requiredMovie = movies[movieIndex]
    res.send(requiredMovie)
});

//4
router.get("/films", function(req, res){
    const films = [ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]
       //send all the films
      res.send(films) 
});

//5
router.get("/films/:filmId", function(req, res){
    const films = [ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]

       let filmId = req.params.filmId
       for(let i = 0; i < films.length; i++){
           let film = films[i]
           if(film.id == filmId) {
              
               return res.send(film)
           }
       }

       res.send("The film id doesn't match any movie")
});

//1
   router.get("/sol1", function (req, res) { 
    
    let arr= [1,2,3,5,6,7]
  
    let sum = 0;
    for (let i in arr) {
        sum += arr[i];
    }
  
    let n = arr.length + 1
     expectedsum = Math.floor((n*(n+1))/2) 
    let missingNumber= expectedsum - sum
  
    res.send(  { data: missingNumber  }  );
  });

  //2
  router.get("/sol2", function (req, res) { 
    
    let arr= [33,34,35,37,38]
  
    let sum = 0;
    for (let i=0; i<arr.length; i++) {
        sum += arr[i];
    }
  
    let fristDigit = arr[0]
    let lastDigit = arr.pop()
     expectedsum =  (arr.length+1)*(fristDigit+lastDigit)/2
    let missingNumber= expectedsum - sum
  
    res.send(  { data: missingNumber  }  );
  });

//part1
router.post('/createUser', UserController.createUser);
router.get('/getUserdata',  UserController.getUsersData);
router.post('/createbooks', UserController.createbooks);
router.get('/getbooksdata',  UserController.getbooksData);
//part2
router.post('/createBook',  UserController.createBook);
router.get('/bookList',  UserController.bookList);
router.post('/getBooksInYear',  UserController.getBooksInYear);
router.post('/getParticularBooks',  UserController.getParticularBooks);
router.get('/getXINRBooks',  UserController.getXINRBooks);
router.get('/getRandomBooks',  UserController.getRandomBooks);*/



router.post('/createAuthor',  authorController.createAuthor);
router.post('/createbook',  bookController.createbook);
router.post('/getAuthorId',  authorController.getAuthorId);
router.post('/findPrice',  bookController.findPrice);
router.post('/findauthor',  bookController.findauthor);
module.exports = router;
// adding this comment for no reasongir
// adding this comment for no reasongir