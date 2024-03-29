const express = require('express');
const router = express.Router();
const sauceCtrl = require('../controllers/sauceCtrl');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');


router.get('/', auth, sauceCtrl.getSauce);
router.get('/:id', auth, sauceCtrl.getOne);
router.post('/', auth, multer, sauceCtrl.create);
router.put('/:id', auth, multer, sauceCtrl.editSauce);
router.delete('/:id', auth, multer, sauceCtrl.deleteSauce);
router.post('/:id/like', auth, sauceCtrl.likeSauce);


module.exports = router;