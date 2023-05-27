const User = require("../models/user.models")
const jwt = require("jsonwebtoken")
const argon2 = require("argon2")


const SIGNUP = async (req, res) => {
    try {
        const { username, email, password, role } = req.body;
        //         if (role === "admin") {
        //             console.log("create admin req found")
        //             return res.status(403).send({ error: 'this action cannot be performed' });
        //         }
        if (role === 'oem' && req.user.role !== 'admin') {
            return res.status(403).send({ error: 'Only admin can create OEM users' });
        }
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).send({ error: 'User already exists' });
        }
        const hashedPassword = await argon2.hash(password);
        user = await User.create({ username, email, password: hashedPassword, role });
        const token = jwt.sign({ email, username, _id: user._id, role }, process.env.JWT_SECRET);
        res.status(201).send({ email, username, _id: user._id, role, token });
    } catch (err) {
        res.status(500).send(err.message);
    }
}


const LOGIN = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).send('Invalid credentials');
        }
        const isMatch = await argon2.verify(user.password, password);
        if (!isMatch) {
            return res.status(401).send('Invalid credentials');
        }
        const { username, _id, role } = user
        const token = jwt.sign({ email, username, _id, role }, process.env.JWT_SECRET);
        res.status(201).send({ email, username, _id, token, role });
    } catch (err) {
        console.error(err);
        res.status(500).send(err.message);
    }
}

module.exports = { SIGNUP, LOGIN }
