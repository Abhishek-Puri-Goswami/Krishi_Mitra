
const User = require('../models/user');
const bcrypt = require('bcrypt');

module.exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists
    const foundUser = await User.findOne({ email });
    if (!foundUser) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Compare entered password with stored hashed password
    const isMatch = await bcrypt.compare(password, foundUser.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    console.log('Login successful');
    return res.status(200).json({ message: 'Login successful', user: foundUser });

  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};
