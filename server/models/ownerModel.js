const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const petSchema = require('./petModel');

//user schema/model
const ownerSchema = Schema({
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
    pets: [{ type: Schema.ObjectId, ref: 'pets', required: false}],
    updatedAt : { type: Date, default: Date.now},
    createdAt: { type: Date, default: Date.now, immutable: true}
});

ownerSchema.pre('findOneAndDelete', function(next) {
    const ownerId = this.getQuery()["_id"];
    mongoose.model('pets').deleteMany({ owner: ownerId });
    next();
});

ownerSchema.pre('save', function(next) {
    this.updatedAt = new Date();
    next();
});

module.exports = mongoose.model('owners', ownerSchema)