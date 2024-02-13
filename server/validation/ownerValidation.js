const z = require('zod');
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ownerValidation = z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email({message: 'Wrong email format.'}).optional(),
    phoneNumber: z.string().optional(),
    address: z.object({
        street: z.string().optional(),
        city: z.string().optional(),
        state: z.string().optional(),
        zip: z.string().optional(),
    }).optional(),
    pets: z.array(z.string()).optional(),
});

module.exports = ownerValidation;

