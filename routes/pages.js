let express=require("express");
let router=express.Router();


router.get("/", (req, res) => {
    res.render("Home.ejs");
  });
  
  router.get("/signup", (req, res) => {
    res.render("SignUp.ejs");
  });


  router.get("/login", (req, res) => {
    res.render("login.ejs");
  });


module.exports=router;