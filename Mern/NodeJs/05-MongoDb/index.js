const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 8000; 

// middleware plugin
app.use(express.urlencoded({extended : false}));

//connection
mongoose.connect('mongodb://127.0.0.1:27017/Mydb')
.then(()=> console.log("Mongo DB connection"))
.catch((err)=> console.log(`Error Mongo is not connected ${err}`));

//Schema 
const userSchema = new mongoose.Schema({
    firstName : {
        type: String,
        required : true,
    },
    lastName : {
        type: String,
    },
    email : {
        type: String,
        required : true,
        unique : true,
    },
    jobTitle : {
        type : String,
    },
    gender : {
        type : String,
    },
},{timestamps:true});

const User = mongoose.model("user", userSchema);
console.log("Hello World");

app.post("/users", async (req,res) => {
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
    return res.status(201).json({msg:"Success"});
});

app.get("/users", async(req,res) => {
    const allDbUsers = await User.find({});
    const html = `
        <ul>
            ${allDbUsers.map((user) => `<li>${user.firstName} - ${user.email}</li>`).join("")}
        </ul>
    `;
    res.send(html);
})

app.get("/api/users", async (req,res) => {
    const allDbUsers = await User.find({});
    return res.json(allDbUsers);
});

app.route("/api/users/:id")
    .get(async(req,res) => {
        const user = await User.findById(req.params.id);
        if(!user) return res.status(404).json({error: "User Not Found"});
        return res.json(user);

    })
    .patch(async(req,res) => {
        const user = await User.findByIdAndUpdate(req.params.id,{ lastName : "JainSahab"})
        return res.json({status : "success"})
    })
    .delete(async(req,res)=> {
        await User.findByIdAndDelete(req.params.id);
        return res.json({status : "success"})
    })



app.listen(PORT,()=> console.log("server is started" , PORT));