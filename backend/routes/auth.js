const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Dummy admin user creation
const createAdminUser = async () => {
    const existingAdmin = await User.findOne({ username: 'admin' });
    if (!existingAdmin) {
        const hashedPassword = await bcrypt.hash('admin123', 10);
        const newUser = new User({ username: 'admin', password: hashedPassword });
        await newUser.save();
    }
};
createAdminUser();

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ loginStatus: false, error: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ loginStatus: false, error: 'Invalid credentials' });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ loginStatus: true, token });
    } catch (err) {
        res.status(500).json({ loginStatus: false, error: 'Server error' });
    }
});

module.exports = router;
