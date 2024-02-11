const z = require('zod');

const petValidation = z.object({
    owned: z.instanceof(ObjectId),
    name: z.string(),
    breed: z.string().optional(),
    color: z.string().optional(),
});

module.exports = petValidation ;

