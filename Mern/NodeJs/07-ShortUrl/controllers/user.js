const USER = require("../models/user")
const {v4: uuidv4} =  require('uuid')
const {getUser,setUser} = require("../service/auth")
async function handleUserSignUp(req,res){
    const { name , email , password} = req.body;
    await USER.create({
        name,
        email,
        password,
    });
    return res.redirect("/")
}
async function handleUserLogin(req,res){
    const {email , password} = req.body;
    const user = await USER.findOne({email,password});
    if(!user) return res.render("login",{
        error : 'Invalid Username or Password',
    })
    // const sessionId = uuidv4();
    // setUser(sessionId,user); *//
    
    const token = setUser(user); 
    res.cookie('uid',token);
    return res.redirect("/");
}



module.exports = {
    handleUserSignUp,
    handleUserLogin,
}