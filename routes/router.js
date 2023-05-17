const express=require("express");
const router=require("express").Router();
const {create,alluser,update,deletedata}=require("../controllers/controls");
router.post("/create",create)
router.get("/alluser",alluser)
router.post("/update",update)
router.post("/delete",deletedata)
module.exports=router