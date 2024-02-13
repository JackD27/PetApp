const ownerController = require('../controllers/ownerController');
const express = require('express');
const router = express.Router();


router.route('/get-owners').get(ownerController.getOwners);
router.route('/get-owner/:id').get(ownerController.getOwnerById);
router.route('/create').post(ownerController.createOwner);
router.route('/delete/:id').delete(ownerController.deleteOwner);

module.exports = router;