const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//user schema/model
const personSchema = Schema({
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: String,
    address: String,
    pets: [{ type: Schema.ObjectId, ref: 'pets' }],
    createdAt: { type: Date, default: Date.now},
});

module.exports = mongoose.model('people', personSchema)