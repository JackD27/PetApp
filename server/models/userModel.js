const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//user schema/model
const userSchema = Schema({
    username: String,
    email: { type: String, lowercase: true},
    password: String,
    isAdmin: { type: Boolean, default: false },
    updatedAt : { type: Date, default: Date.now},
    createdAt: { type: Date, default: Date.now, immutable: true}
});

userSchema.pre('save', function(next) {
    this.updatedAt = new Date();
    next();
});

module.exports = mongoose.model('users', userSchema)