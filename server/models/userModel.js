const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//user schema/model
const userSchema = Schema({
    username: String,
    email: String,
    password: String,
    isAdmin: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now},
});

module.exports = mongoose.model('users', userSchema)