const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//user schema/model
const personSchema = Schema({
    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: String,
    address: {
        street: String,
        city: String,
        state: String,
        zip: String,
    },
    pets: [{ type: Schema.ObjectId, ref: 'pets' }],
    updatedAt : { type: Date, default: Date.now},
    createdAt: { type: Date, default: Date.now, immutable: true}
});

personSchema.pre('remove', function(next) {
    this.model('pets').deleteMany({ owner: this._id });
    next();
});

personSchema.pre('save', function(next) {
    this.updatedAt = new Date();
    next();
});

module.exports = mongoose.model('people', personSchema)