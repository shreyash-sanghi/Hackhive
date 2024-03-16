require("dotenv").config();
const express = require("express");
const app = express();
const port = 2345 || process.env.PORT;
const mongoose = require("mongoose");
const cors = require("cors");
const auth = require("./src/routes/auth")
const bodyParser = require('body-parser');



try {
  mongoose.connect(process.env.DatabaseConnect).then(() => {
    console.log("Connected to Database");

  })
} catch (error) {
  console.log(error);
}


app.use(
  cors({
    origin: "https://mediguide-indol.vercel.app",
    methods: ["POST", "GET", "OPTIONS", "PATCH", "PUT", "DELETE"],
    credentials: true,
  })
);

  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://mediguide-indol.vercel.app");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

  //Set Use State
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(auth);

app.get("",(req,res)=>{
    res.send("Hello How are you..")
})

app.listen(port,()=>{
    console.log("Connect successfully...")
})