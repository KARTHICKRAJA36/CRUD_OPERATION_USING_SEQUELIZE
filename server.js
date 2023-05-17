const express=require("express");
const app=express();
app.use(express.json());
const query=require("./models/query")
const sequelize=require("./config/db")
const rout=require("./routes/router");
app.use(rout)
app.listen(3300,()=>{
    console.log("server running at the port 3300....");
})