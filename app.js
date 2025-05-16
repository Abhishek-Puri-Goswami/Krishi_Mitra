const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
const db = require("./config/db");
let Register=require("./routes/register");
let pages=require("./routes/pages");

dotenv.config();

db();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   res.send("Testing phase");
// });

//mvc


app.use('/user',Register);
app.use('/',pages)

app.listen(process.env.port, () => {
  console.log("Server is running");
});
