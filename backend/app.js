const express = require("express");
const app = express();
const port = 2345 || process.env.PORT;
const mongoose = require("mongoose");
try {
    mongoose.connect(process.env.DatabaseConnect).then(() => {
      console.log("Connected to Database");
  
    })
  } catch (error) {
    console.log(error);
  }

app.get("",(req,res)=>{
    res.send("Hello How are you..")
})

app.listen(port,()=>{
    console.log("Connect successfully...")
})