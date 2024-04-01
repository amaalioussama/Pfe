const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/confirm/:token', authController.confirm);
router.post('/logout', authController.logout);

module.exports = router;
    