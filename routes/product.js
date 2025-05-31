const express = require("express");
const router = express.Router();

const Product = require("../controllers/product");
const upload = require("../middlewares/Multer");

router.get("/new", (req, res) => {
  console.log(">>> Rendering Sell_Product.ejs");
  res.render("Sell_Product.ejs");
});

router.post("/upload", upload.array("images"), Product.uploadProduct);

module.exports = router;
