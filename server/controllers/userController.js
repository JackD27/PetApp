const userModel  = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {newUserValidation}  = require("../validation/userValidation");

const userSignup = async (req, res) => {
    try {
        const { error } = newUserValidation(req.body);
        if (error) return res.status(400).json({ message: error.errors[0].message });

        const { username, email, password } = req.body;

        const emailExists = await userModel.findOne({ email });
        if (emailExists) return res.status(400).json({ message: "Email already exists." });

        const userExists = await userModel.findOne({ username });
        if (userExists) return res.status(400).json({ message: "Username already exists." });

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new userModel({ username, email, password: hashedPassword});
        const savedUser = await newUser.save();
        res.status(201).json({ message: "User created successfully.", user: savedUser });
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const getUsers = async (req, res) => {
    try {
        const users = await userModel.find().select(["-password", "-__v", "-email"]);
        res.status(200).json(users);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

module.exports = { userSignup, getUsers };