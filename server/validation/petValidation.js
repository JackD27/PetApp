const z = require('zod');
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const petValidation = z.object({
    owner: z.string(),
    name: z.string(),
    breed: z.string().optional(),
    color: z.string().optional(),
});

module.exports = petValidation ;

