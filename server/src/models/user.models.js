const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    username: { type: String, required: true },
    role: {
        type: String,
        enum: ["admin", 'oem', "consumer", "seller"],
        default: "consumer",
        required: true
    },

}, {
    createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model('BUser', userSchema);

module.exports = User;