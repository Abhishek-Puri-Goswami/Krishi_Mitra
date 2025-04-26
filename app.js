const express = require("express");
const app=express();
const dotenv=require("dotenv");

dotenv.config();

app.get('/', (req, res) => {
    res.send("Testing phase");
});

app.listen(process.env.port, () => {
    console.log('Server is running');
});

