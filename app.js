const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
const db = require("./config/db");
const multer = require("multer");
const fs = require("fs");
const uploadFolder = path.join(__dirname, "public/images/uploads");

dotenv.config();

db();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

// Required for parsing form data
app.use(express.urlencoded({ extended: true }));

if (!fs.existsSync(uploadFolder)) {
  fs.mkdirSync(uploadFolder);
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadFolder);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

app.get("/", (req, res) => {
  res.send("Testing phase");
});

app.get("/home", (req, res) => {
  res.render("Home.ejs");
});

app.get("/signup", (req, res) => {
  res.render("SignUp.ejs");
});

app.post("/signup", upload.single("aadharImg"), (req, res) => {
  console.log(req.file.filename);

  const {
    name,
    address,
    aadhaar,
    otp,
    role,
    email,
    password,
    confirmPassword,
  } = req.body;

  //! Handle logic here (e.g., save to database)
  //TODO DB logic

  res.redirect("/home");
});

app.listen(process.env.port, () => {
  console.log("Server is running");
});
