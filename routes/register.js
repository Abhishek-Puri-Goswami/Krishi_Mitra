let express=require("express");
let router=express.Router();
let Reg=require("../controllers/register");
let Login=require("../controllers/login");
const OTP=require("../controllers/otp");
const multer = require("multer");
const fs = require("fs");
const upload = require('../middlewares/Multer');



router.post("/signup", upload.single("aadharImg"),Reg.register);

router.post("/login",Login.login);

router.post("/otp",OTP.otp);

module.exports=router;