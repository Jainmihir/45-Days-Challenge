const express = require("express");
const userRouter = require("./routes/user")
const app = express();
const PORT = 8000;
const {connectMongoDb} = require("./config")



// connection
connectMongoDb("mongodb://127.0.0.1:27017/Mydb")
.then(() => console.log('Mongodb connected'));

// middleware plugin
app.use(express.urlencoded({extended : false}));

// Routes
app.use("/user",userRouter);


app.listen(PORT,() => console.log(`Server has been started on Port :${PORT}`));
