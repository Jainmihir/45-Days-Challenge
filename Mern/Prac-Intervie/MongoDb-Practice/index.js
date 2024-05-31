const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const { Timestamp } = require('mongodb');



dotenv.config();

app.use(express.urlencoded({extended : false}));


mongoose.connect(process.env.MONGODB_URI)
.then((result) => console.log(" Db is connected") )
.catch((error) => console.log("Error"));


const CreateUserSchema = new mongoose.schema({
    firstName : {
        type : string,
    },
    lastname : { 
        type : string,
    },
},{Timestamp : true});


app.get('/create' ,async(req,res) => {
    const body = req.body;
    const result = await Transaction.create({
        firstName : "mihir",
        lastname :  "Jain",
    })
})





app.listen(8000,() => {
    console.log("Mihir Jain");
})