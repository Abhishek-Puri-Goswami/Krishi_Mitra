let User=require("../models/user")

module.exports.Verify = async (req, res) => {
    const email = req.body.email;
    const otp = req.body.otp;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        if (otp === user.otp) {
            console.log("verified")
            // Invalidate the OTP after successful verification
            user.otp = null;
            await user.save();

            console.log("OTP verified for", email);
            return res.status(200).json({ message: "OTP verified successfully" });
        } else {
            return res.status(400).json({ message: "Invalid OTP" });
        }
    } catch (error) {
        console.error("Error verifying OTP:", error);
        return res.status(500).json({ message: "Server error" });
    }
};


