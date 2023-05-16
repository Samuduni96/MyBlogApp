const User = require('../models/User');
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const { validationResult } = require('express-validator');

const app = express();
app.use(cookieParser());

//Register
const registerUser = async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        const newUser = new User ({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass,
        });

        const user = await newUser.save();
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
};

// Login
const loginUser =  async (req, res) => {
    const { username, password } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET || '');

        // Set the token as a cookie with HttpOnly and Secure flags
        res.cookie('jwt', token, { httpOnly: true, secure: true });

        res.json({ message: 'Authentication successful', user, token });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};

const logoutUser = (req, res) => {
    // Clear the JWT cookie by setting it to an empty string with an expired date
    res.cookie('jwt', '', { expires: new Date(0), httpOnly: true, secure: true });
  
    res.json({ message: 'Logout successful' });
  };

module.exports = { registerUser, loginUser, logoutUser };