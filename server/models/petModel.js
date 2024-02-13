const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//user schema/model
const petSchema = Schema({
    owner: { type: Schema.ObjectId, ref: 'people' },
    name: String,
    breed: String,
    color: String,
    updatedAt : { type: Date, default: Date.now},
    createdAt: { type: Date, default: Date.now, immutable: true}
});

petSchema.pre('save', function(next) {
    this.updatedAt = new Date();
    next();
});

module.exports = mongoose.model('pets', petSchema)