const jwt = require("jsonwebtoken");
const userController= require("../controllers/userController")

const authenticate = function(res, req, next) {
    let token = req.headers["x-auth-token"]
if(!token)
token = req.headers["x-auth-token"]
if(!token)
return res.send({status:false , msg:"token is needed"})
let validToken = jwt.verify(token,"this-is-my-token")
if(!validToken)
return res.send({status:false,msg:"token is not valid"})
    //check the token in request header
    //validate this token

    next()
}


const authorise = function(req, res, next) {
    req.data = req.params.userId
    let login = validToken.userId
    if(req.data!= login)
    return res.send({status:false,msg:"user will not authenticate"})
    // comapre the logged in user's id and the id in request
    next()
};

module.exports.authenticate = authenticate;
module.exports.authorise = authorise