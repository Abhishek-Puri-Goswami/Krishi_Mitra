const mongoose = require("mongoose");
const validator = require("validator");
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
        validate: [validator.isEmail, 'Invalid email format'],
    },
      phone: {
        type: String,
        required: true,
        unique: true,
        validate: [validator.isMobilePhone, 'Invalid phone number format'],
      },
      aadharno:{
        type:String,
        unique:true,
        require:true,
      },
      address:{
        type:String,
        require:true,
      },
      
}, { timestamps: true }); 

userSchema.plugin(plm);

module.exports = model('User', userSchema);
