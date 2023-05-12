const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs'); // for password hashing

// Registration route
router.post('/register', async (req, res) => {
    const { username, password } = req.body;

    // Check if username already exists
    const user = await User.findOne({ username });
    if (user) return res.status(400).json({ message: 'Username already exists' });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
        username,
        password: hashedPassword
    });

    // Save user and return response
    try {
        await newUser.save();
        res.json({ message: 'User registered successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error registering user', err });
    }
});

// Login route
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: 'Invalid username or password' });

    // Check password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(400).json({ message: 'Invalid username or password' });

    // Return success message
    res.json({ message: 'Logged in successfully' });
});

module.exports = router;
