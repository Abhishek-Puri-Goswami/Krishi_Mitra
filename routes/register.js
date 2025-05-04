let express=require("express");
let router=express.Router();
let Reg=require("../controllers/register");
let Login=require("../controllers/login");
const multer = require("multer");
const fs = require("fs");
const upload = require('../middlewares/Multer');



router.post("/signup", upload.single("aadharImg"),Reg.register);

router.post("/login",Login.login);

module.exports=router;