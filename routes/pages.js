let express=require("express");
let router=express.Router();


router.get("/", (req, res) => {
    res.render("Home.ejs");
  });
  
  router.get("/signup", (req, res) => {
    res.render("SignUp.ejs");
  });


  router.get("/login", (req, res) => {
    res.render("Login.ejs");
  });
  

  router.get("/sell", (req, res) => {
    res.render("Sell_Product.ejs");
  });

  
   router.get("/email", (req, res) => {
    res.render("Email_verification.ejs");
  });
  

module.exports=router;