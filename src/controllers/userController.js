const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");



const createUser = async function (req, res) {
  
  let data = req.body;
  let savedData = await userModel.create(data);
  console.log(req.newAtribute);
  res.send({ msg: savedData });
};

const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is not corerct",
    });
    let token = jwt.sign(
      {
        userId: user._id.toString(),
        batch: "plutonium",
        organisation: "FUnctionUp",
      },
      "this-is-my-token"
    );
    res.setHeader("x-auth-token", token);
    res.send({ status: true, data: token });
  };


  const getUserData = async function (req, res) {
    let token = req.headers["x-auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    if (!token) return res.send({ status: false, msg: "token must be present" });
  
    console.log(token);
    let decodedToken = jwt.verify(token, "this-is-my-token");
    if (!decodedToken)
      return res.send({ status: false, msg: "token is invalid" });
  //auth
    let data = req.params.userId;
    let loginUser = decodedToken.userId
    if(data!=loginUser)
    return res.send({status:false,msg:"user will not authorised"})
    let userDetails = await userModel.findById(data);
    res.send({ status: true, data: userDetails });
  };
    
    const updateUser = async function (req, res) {
      let token =req.headers["x-auth-token"]
      if(!token)
        token=req.headers["x-auth-token"]
      if(!token)
        return res.send({status:false,msg:"token is needed"})
      let validToken=jwt.verify(token,"this-is-my-token")
      if(!validToken)
       return res.send({status:false,msg:"token is valid"})
      // auth
      let userData=req.body
      let data=req.params.userId
      let login=validToken.userId
      if(data!=login)
      return res.send({status:false,msg:"user will be not authenticated"})
      let update=await userModel.findOneAndUpdate({_id:data},userData)
      res.send({status:true,msg:update})
       
      };
      const deleteUser= async function(req,res){
        let token=req.headers["x-Auth-token"]
        if(!token)
          token=req.headers["x-auth-token"]
        if(!token)
         return res.send({status:false,msg:"token is not found"})
        let validToken=jwt.verify(token,"this-is-my-token")
        if(!validToken)
          res.send({status:false,msg:"token is not valid"})
          //auth
        let data=req.params.userId
        let login=validToken.userId 
        if(data!=login)
          return res.send({status:false,msg:"user will not be not authorised "})
        let isDeleted=await userModel.findByIdAndUpdate({_id:data},{isDeleted:true},{new:true})
        res.send({status:true,msg:isDeleted})
      }
      const getUserauth2 = async function (req,res){
  
        let details = await userModel.findById(req.data)
      res.send({status:true,msg:details})
      
      }
      const updateauth2 = async function(req,res){
        let userData = req.body
        let update = await userModel.findOneAndUpdate({_id:req.data},userData)
      res.send({status:true,msg:update})
       
      
      }
      const deleteauth2 = async function(req,res){
        let isDeleted = await userModel.findByIdAndUpdate({_id:req.data},{isDeleted:true},{new:true})
        res.send({status:true,msg:isDeleted})
        
      }
      /*const createUser = async function (abcd, xyz) {
  //You can name the req, res objects anything.
  //but the first parameter is always the request 
  //the second parameter is always the response
  let data = abcd.body;
  let savedData = await userModel.create(data);
  console.log(abcd.newAtribute);
  xyz.send({ msg: savedData });
};

const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is not corerct",
    });

  // Once the login is successful, create the jwt token with sign function
  // Sign function has 2 inputs:
  // Input 1 is the payload or the object containing data to be set in token
  // The decision about what data to put in token depends on the business requirement
  // Input 2 is the secret
  // The same secret will be used to decode tokens
  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "thorium",
      organisation: "FUnctionUp",
    },
    "functionup-thorium"
  );
  res.setHeader("x-auth-token", token);
  res.send({ status: true, data: token });
};

const getUserData = async function (req, res) {
  let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];

  //If no token is present in the request header return error
  if (!token) return res.send({ status: false, msg: "token must be present" });

  console.log(token);
  
  // If a token is present then decode the token with verify function
  // verify takes two inputs:
  // Input 1 is the token to be decoded
  // Input 2 is the same secret with which the token was generated
  // Check the value of the decoded token yourself
  let decodedToken = jwt.verify(token, "functionup-thorium");
  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });

  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });

  res.send({ status: true, data: userDetails });
};

const updateUser = async function (req, res) {
// Do the same steps here:
// Check if the token is present
// Check if the token present is a valid token
// Return a different error message in both these cases

  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
  res.send({ status: updatedUser, data: updatedUser });
};

const postMessage = async function (req, res) {
    let message = req.body.message
    // Check if the token is present
    // Check if the token present is a valid token
    // Return a different error message in both these cases
    let token = req.headers["x-auth-token"]
    if(!token) return res.send({status: false, msg: "token must be present in the request header"})
    let decodedToken = jwt.verify(token, 'functionup-thorium')

    if(!decodedToken) return res.send({status: false, msg:"token is not valid"})
    
    //userId for which the request is made. In this case message to be posted.
    let userToBeModified = req.params.userId
    //userId for the logged-in user
    let userLoggedIn = decodedToken.userId

    //userId comparision to check if the logged-in user is requesting for their own data
    if(userToBeModified != userLoggedIn) return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})

    let user = await userModel.findById(req.params.userId)
    if(!user) return res.send({status: false, msg: 'No such user exists'})
    
    let updatedPosts = user.posts
    //add the message to user's posts
    updatedPosts.push(message)
    let updatedUser = await userModel.findOneAndUpdate({_id: user._id},{posts: updatedPosts}, {new: true})

    //return the updated user document
    return res.send({status: true, data: updatedUser})
}*/
 

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
//module.exports.deleteUser = deleteUser;

//module.exports. getUserauth2 =  getUserauth2;
//module.exports.updateauth2 = updateauth2;
//module.exports. deleteauth2 =  deleteauth2
