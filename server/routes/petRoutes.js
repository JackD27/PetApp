const petController = require('../controllers/petController');
const express = require('express');
const router = express.Router();


router.route('/get-pets').get(petController.getPets);
router.route('/create').post(petController.createPet);
router.route('/delete/:id').delete(petController.deletePet);
router.route('/delete-all').delete(petController.deleteAllPets);

module.exports = router;