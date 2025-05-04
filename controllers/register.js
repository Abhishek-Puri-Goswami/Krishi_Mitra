const cloudinary = require('../config/cloudinary');
const fs = require('fs');
let user = require('../models/user');
const bcrypt = require('bcrypt');

module.exports.register = async (req, res) => {
    try{
        let imageUrl = '';
 
     if (req.file) {
       // Upload to Cloudinary
       const result = await cloudinary.uploader.upload(req.file.path, {
         folder: 'aadhar image'
       });
 
       imageUrl = result.secure_url;
       console.log('Image URL:', imageUrl);
       fs.unlinkSync(req.file.path);

       const hashedPassword = await bcrypt.hash(req.body.password, 10);
       console.log(hashedPassword);
       

       let Users= new user({
        username: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        aadharno: req.body.aadharno,
        address: req.body.address,
        role: req.body.role,
        aadharImg: imageUrl,
        password: hashedPassword,
    }); 

    Users.save();
      
    }
}catch (error) {
        console.error('Error adding temple:', error);
        res.status(500).json({
          message: 'Failed to add temple',
          error: error.message
        });
      }
}