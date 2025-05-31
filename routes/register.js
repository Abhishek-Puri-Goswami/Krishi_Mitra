let express = require("express");
let router = express.Router();
let Reg = require("../controllers/register");
let Login = require("../controllers/login");
const OTP = require("../controllers/otp");
const multer = require("multer");
const fs = require("fs");
const upload = require("../middlewares/Multer");
let verify=require("../controllers/verify")

router.get("/signup", (req, res) => {
  res.render("SignUp.ejs");
});

router.post("/signup", upload.single("aadharImg"), Reg.register);

router.get("/login", (req, res) => {
  res.render("login.ejs");
});

router.post("/login", Login.login);

router.get("/otp", (req, res) => {
  res.render("Forgot_Password.ejs");
});

router.post("/otp", OTP.otp);

router.post("/verify",verify.Verify);

module.exports = router;
