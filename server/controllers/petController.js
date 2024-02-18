const petModel = require('../models/petModel');
const ownerModel = require('../models/ownerModel');
const petValidation = require('../validation/petValidation');

const createPet = async (req, res) => {
    try {
        const { error } = petValidation.safeParse(req.body);
        if (error) return res.status(400).json({ message: error.errors[0].message });

        const { name, species, breed, age, owner, color } = req.body;

        const newPet = new petModel({ name, species, breed, age, owner, color });

        const ownerExists = await ownerModel.findById(owner);
        if (!ownerExists) return res.status(400).json({ message: "Owner does not exist." });


        ownerExists.pets.push(newPet);
        const updatedOwner = await ownerExists.save();
        const savedPet = await newPet.save();
        const populatedPet = await savedPet.populate({path: "owner", select: ["-__v", "-pets", "-address", "-email", "-phoneNumber", "-updatedAt", "-createdAt"]});
        res.status(201).json({ message: "Pet created successfully.", pet: populatedPet});
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const getPets = async (req, res) => {
    try {
        const pets = await petModel.find().select("-__v").populate({path: "owner", select: ["-__v", "-pets", "-address", "-email", "-phoneNumber", "-updatedAt", "-createdAt"]});
        const owners = await ownerModel.find().select(["-__v", "-pets", "-address", "-email", "-phoneNumber", "-updatedAt", "-createdAt"]);
        res.status(200).json({pets: pets, owners: owners});
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const deletePet = async (req, res) => {
    try {
        const pet = await petModel.findById(req.params.id);
        if (!pet) return res.status(404).json({ message: "Pet not found." });

        await pet.deleteOne();
        res.json({ message: "Pet deleted successfully." });
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const deleteAllPets = async (req, res) => {
    try {
        const pets = await petModel.deleteMany();
        res.json({ message: "All pets deleted successfully." });
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}

module.exports = { createPet, getPets, deletePet, deleteAllPets };
