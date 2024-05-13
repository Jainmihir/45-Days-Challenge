const express = require("express");
const { connectToMongoDB } = require("./connection");
const urlRoute = require("./routes/urlRouter");
const URL = require("./models/url");
const userRoute = require("./routes/user")
const path = require('path')
const app = express();
const PORT = 8001;
const staticRouter = require('./routes/staticRouter');
const cookieParser = require('cookie-parser')
const {restrictToLoginUserOnly,checkAuth} = require("./middleware/auth")

connectToMongoDB("mongodb://localhost:27017/short-url").then(() =>
  console.log("Mongodb connected")
);

app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser());
// server side rendering
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use("/user", userRoute);
app.use("/", checkAuth, staticRouter);

// app.get("/url/test",async(req,res)=>{
//   const allUrls = await URL.find({});
//   return res.render("home",{
//     urls : allUrls,
//   });
// })


app.use("/url",restrictToLoginUserOnly,urlRoute);

app.get("/url/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectURL);
});

app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));
