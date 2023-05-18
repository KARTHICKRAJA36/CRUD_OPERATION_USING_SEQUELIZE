const express=require("express");
const router=require("express").Router();
const {create,alluser,update,deletedata}=require("../controllers/controls");
const uploadMiddleware = require("../middleware/middleware");
router.post("/create",create)
router.get("/alluser",alluser)
//router.post("/update",update)
router.post("/delete",deletedata)
router.post('/upload/:id/:username', uploadMiddleware,update);
module.exports=router