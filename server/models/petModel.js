const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//user schema/model
const petSchema = Schema({
    owner: { type: Schema.ObjectId, ref: 'people' },
    name: String,
    breed: String,
    color: String,
    createdAt: { type: Date, default: Date.now},
});

module.exports = mongoose.model('pets', petSchema)