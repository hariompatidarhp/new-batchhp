const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const PublisherController= require("../controllers/PublisherController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )

router.post("/createPublisher", PublisherController.createPublisher )

//router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook", bookController.createBook  )
//router.get("/Bookwithauthor", bookController.Bookwithauthor)


//router.get("/getBooksData", bookController.getBooksData)

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)
router.put("/books", bookController.books)
router.put("/updateprice", bookController.updateprice)

module.exports = router;