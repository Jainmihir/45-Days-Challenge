const express = require("express");
const { connectToMongoDB } = require("./connection");
const urlRoute = require("./routes/urlRouter");
const URL = require("./models/url");
const path = require('path')
const app = express();
const PORT = 8001;
const staticRouter = require('./routes/staticRouter');
const exp = require("constants");

connectToMongoDB("mongodb://localhost:27017/short-url").then(() =>
  console.log("Mongodb connected")
);

app.use(express.json());
app.use(express.urlencoded({extended : false}));
// server side rendering
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use("/",staticRouter);

// app.get("/url/test",async(req,res)=>{
//   const allUrls = await URL.find({});
//   return res.render("home",{
//     urls : allUrls,
//   });
// })


app.use("/url", urlRoute);

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
