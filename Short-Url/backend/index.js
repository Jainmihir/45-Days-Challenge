require('dotenv').config()
const express = require("express");
const { connectToMongoDB } = require("./connect");
const urlRoute = require("./routes/Urlrouter");
const URL = require("./models/Urlmodels");
const cors = require('cors');
const app = express();
const PORT = 8001;

connectToMongoDB(process.env.MONGO_URL).then(() =>
  console.log("Mongodb connected")
);

app.use(cors({
  origin: ['http://localhost:5173', 'https://mihir-shorturl.vercel.app'],
  credentials: true,
  optionsSuccessStatus: 200
}));
app.use(express.json());

app.use("/api/url", urlRoute);


app.listen(PORT, () => console.log(`Server Started at PORT:${PORT}`));