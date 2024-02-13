const ownerModel = require('../models/ownerModel');
const petModel = require('../models/petModel');
const ownerValidation = require('../validation/ownerValidation');

const createOwner = async (req, res) => {
    try {
        const { error } = ownerValidation.safeParse(req.body);
        if (error) return res.status(400).json({ message: error.errors[0].message });

        const { firstName, lastName, email, phoneNumber, address} = req.body;

        const newOwner = new ownerModel({ firstName, lastName, email, phoneNumber, address});
        const savedOwner = await newOwner.save();
        res.status(201).json({ message: "Owner created successfully.", owner: savedOwner });
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const getOwners = async (req, res) => {
    try {
        const owners = await ownerModel.find().select("-__v");
        res.status(200).json(owners);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }

}

const deleteOwner = async (req, res) => {
    try {
        const owner = await ownerModel.findOneAndDelete({ _id: req.params.id });
        if (!owner) return res.status(404).json({ message: "Owner not found." });
        const pets = await petModel.deleteMany({ owner: req.params.id });


        res.json({ message: "Owner deleted successfully." });
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const getOwnerById = async (req, res) => {
    try {
        const owner = await ownerModel.findById(req.params.id).select("-__v").populate("pets");
        if (!owner) return res.status(404).json({ message: "Owner not found." });
        res.status(200).json(owner);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}

module.exports = { createOwner, getOwners, deleteOwner, getOwnerById };
