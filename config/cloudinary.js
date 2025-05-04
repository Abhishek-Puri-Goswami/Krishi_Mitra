const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dq9ymitat',
  api_key: '899751129294283',
  api_secret: '2iu0KSzaN44ratqBGfzOI2alH9s',
});

module.exports = cloudinary;
