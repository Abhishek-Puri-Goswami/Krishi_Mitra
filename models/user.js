const mongoose = require("mongoose");
const { model } = mongoose; 

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
      phone: {
        type: String,
        required: true,
        unique: true,
      },
      aadharno:{
        type:String,
        unique:true,
        require:true,
      },
      aadharImg:{
        type:String,
        require:true,
      },
      address:{
        type:String,
        require:true,
      },
      role: {
        type: String,
      },
      password: {
        type: String,
        required: true,
      },
      otp:{
        type:String,
      }
}, { timestamps: true }); 

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
