const express = require('express')

const app = express();

app.get("/",(req,res) => {
    return res.send("Hello This is an Home Page")
});

app.get("/about",(req,res) => {
    return res.send(`This is an about Page and Welcome ${req.query.name}`);
})

app.get("*",(req,res) => {
    return res.send(`This is an Unknown Page ${req.query.name}`);
})

app.listen(8000, () => console.log("Server Started !"))