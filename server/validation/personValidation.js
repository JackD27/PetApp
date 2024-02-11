const z = require('zod');

const petValidation = z.object({
    firstName: z.string().required({message: 'First Name is required.'}),
    lastName: z.string().required({message: 'Last Name is required.'}),
    email: z.string().email({message: 'Wrong email format.'}).optional(),
    phoneNumber: z.string().optional(),
    address: z.string().optional(),
    pets: z.array(z.instanceof(ObjectId)).optional(),
});

module.exports = petValidation;

