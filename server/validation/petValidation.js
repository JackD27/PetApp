const z = require('zod');
const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const petValidation = z.object({
    owner: z.string({required_error: 'Owner is required.'}).min(1, 'Owner ID is required.'),
    name: z.string({required_error: 'Pet Name is required.'}).min(1, 'Pet Name is required.'),
    breed: z.string().optional(),
    color: z.string().optional(),
});

module.exports = petValidation ;

