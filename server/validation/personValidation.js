const z = require('zod');

const personValidation = z.object({
    firstName: z.string().required({message: 'First Name is required.'}),
    lastName: z.string().required({message: 'Last Name is required.'}),
    email: z.string().email({message: 'Wrong email format.'}).optional(),
    phoneNumber: z.string().optional(),
    address: z.object({
        street: z.string().optional(),
        city: z.string().optional(),
        state: z.string().optional(),
        zip: z.string().optional(),
    }).optional(),
    pets: z.array(z.instanceof(ObjectId)).optional(),
});

module.exports = personValidation;

