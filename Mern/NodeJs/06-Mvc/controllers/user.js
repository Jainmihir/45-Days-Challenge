const User = require("../models/user")

async function handleGetAllUsers(req,res) {
    const allDbUsers = await User.find({});
    return res.json(allDbUsers);
}

async function handleGetAllUsersById(req,res) {
    const user = await User.findById(req.params.id);
    if(!user) return res.status(404).json({error: "User Not Found"});
    return res.json(user);
}

async function handleUpdatUserById(req,res){
    const user = await User.findByIdAndUpdate(req.params.id,{ lastName : "JainSahab"})
    return res.json({status : "success"})
}

async function handleUpdatUserById(req,res){
    const user = await User.findByIdAndUpdate(req.params.id,{ lastName : "JainSahab"})
    return res.json({status : "success"})
}



async function handleDeleteUserById(req,res){
    await User.findByIdAndDelete(req.params.id);
    return res.json({status : "success"})
}

async function handleCreateUserById(req,res){
    const body = req.body;
    if(!body || !body.firstName || !body.email || !body.lastName ){
        return res.status(400).json({msg : " ALL FIELDS ARE REQ"});
    }

    const result = await User.create({
        firstName : body.firstName,
        lastName : body.lastName,
        email : body.email,
        jobTitle : body.jobTitle,
        gender : body.gender,
    });

    console.log(result);
    return res.status(201).json({msg:"Success", id: result._id});
}
        
module.exports ={
    handleGetAllUsers,
    handleGetAllUsersById,
    handleUpdatUserById,
    handleDeleteUserById,
    handleCreateUserById,

};

