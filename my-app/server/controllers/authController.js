const UsersModel = require('../models/Users');
const TokenModel = require('../models/Token');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const { Sendmail } = require('../helpers/sendmail');
const { emailreg } = require('../helpers/emailreg');

const register = async (req, res) => {
    const { email, username, password } = req.body;

    try {
        const existingUser = await UsersModel.findOne({ email: email });
        if (existingUser) {
            return res.status(400).json({ error: "Email already exists" });
        }
    } catch (err) {
        console.error("Error:", err);
        return res.status(500).json({ error: "An error occurred while checking email existence" });
    }

    if (!isValidEmail(email)) {
        return res.status(400).json({ error: "Invalid email format" });
    }

    try {
        const newUser = await UsersModel.create({ email, username, password });
        console.log(newUser);

        try {
            const generatedToken = jwt.sign({ userId: newUser._id }, 'secret', { expiresIn: '30d' });
            console.log(generatedToken);

            // Update user document with the generated token
            await UsersModel.findByIdAndUpdate(newUser._id, { token: generatedToken });

            const link = `http://localhost:3001/confirm/${generatedToken}`;
            await Sendmail(email, "Welcome 👻", "", emailreg(username, link));
            console.log('Check your email');

            res.json(newUser);
        } catch (tokenErr) {
            console.error("Error creating token:", tokenErr);
            res.status(500).json({ error: "An error occurred while creating token" });
        }
    } catch (createErr) {
        console.error("Error creating user:", createErr);
        res.status(500).json({ error: "An error occurred during registration" });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await UsersModel.findOne({ email });

        if (!user) {
            return res.status(400).json({ error: 'User does not exist' });
        }

        if (!user.verified) {
            return res.status(400).json({ error: 'User not verified' });
        }

        if (user.password !== password) {
            return res.status(400).json({ error: 'Incorrect password' });
        }

        const token = jwt.sign({ userId: user._id }, 'secret', { expiresIn: '30d' });

        // Update user document with the generated token
        await UsersModel.findByIdAndUpdate(user._id, { token });

        res.cookie('jwttoken', token, {
            expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
            httpOnly: true,
        });

        res.json({ message: 'Valid login', token: token, username: user.username });
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ error: 'An error occurred during login' });
    }
};

const confirm = async (req, res) => {
    const token = req.params.token;
    try {
        const decoded = jwt.verify(token, 'secret');
        const userId = decoded.userId;
        await UsersModel.updateOne({ _id: userId }, { $set: { verified: true } });
        console.log('email verified');
        res.send("Email verified");
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "An error occurred while confirming user" });
    }
};

const logout = (req, res) => {
    res.clearCookie('jwttoken');
    res.json({ message: 'Logged out successfully' });
};

const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

module.exports = {
    register,
    login,
    confirm,
    logout
};