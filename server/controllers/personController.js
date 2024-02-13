const personModel = require('../models/personModel');
const petModel = require('../models/petModel');
const personValidation = require('../validation/personValidation');

const createPerson = async (req, res) => {
    try {
        const { error } = personValidation.safeParse(req.body);
        if (error) return res.status(400).json({ message: error.errors[0].message });

        const { firstName, lastName, email, phoneNumber, address, pets } = req.body;

        const newPerson = new personModel({ firstName, lastName, email, phoneNumber, address, pets });
        const savedPerson = await newPerson.save();
        res.status(201).json({ message: "Person created successfully.", person: savedPerson });
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}
