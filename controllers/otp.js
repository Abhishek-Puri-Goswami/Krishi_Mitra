const userModel = require('../models/user');
const nodemailer = require('nodemailer');

// OTP generator
function generateOTP() {
  return Math.floor(1000 + Math.random() * 9000);
}

// Mail transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: 'krishimitra.team@gmail.com',
    pass: 'xdlb ofef cxtz oshf'
  }
});

// OTP sender function
module.exports.otp = async (req, res) => {
  try {
    const otp = generateOTP();

    const mailOptions = {
      from: {
        name: 'KrishiMitra',
        address: 'krishimitra.team@gmail.com',
      },
      to: 'srivastwaadarsh@gmail.com', 
      subject: 'Reset Password',
      html: `
        <h2>Password Reset Request</h2>
        <p>We received a request to reset your password. Use the Otp below to proceed:</p>
        <h1 style="color: #2c3e50; font-size: 28px; letter-spacing: 2px;">${otp}</h1>
        <p>If you didn’t request a password reset, you can safely ignore this message.</p>
        <p>Need help? <a href="mailto:krishimitra.team@gmail.com">Contact Support</a></p>
      `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending OTP:", error);
        return res.status(500).json({ message: 'Error sending OTP', error: error.message });
      }
      res.render("Forgot_Password.ejs")
    });

  } catch (error) {
    console.error("Internal Server Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
