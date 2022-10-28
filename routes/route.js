const express = require('express');
const { allUser, userCreate, deleteUser, viewData, updateUser, updateNewData } = require('../controllers/userController');
const userPhoto = require('../middlewares/imageMiddleware');



// Create Router
const router = express.Router();

// Routes
router.route('/').get(allUser).post(userPhoto(), userCreate);
router.get('/view/:id', viewData);
router.get('/delete/:id', deleteUser);
router.route('/edit/:id').get(updateUser).post(userPhoto(), updateNewData);

// Exportsnpm
module.exports = router;