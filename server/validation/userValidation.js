const z = require('zod');

    const registerUserValidation = z.object({
      username : z.string('Username required.').min(4, 'Username is too short. Minimum of 4 characters.'),
      email: z.string('Email required.').email('Please Input a valid email').min(1, 'Email is required.').toLowerCase(),
      password: z.string('Password required.').min(6, 'Password is too short. Minimum of 6 characters.').trim(),
    });
    
module.exports = registerUserValidation;

