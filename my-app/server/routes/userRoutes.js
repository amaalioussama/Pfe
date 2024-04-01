const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const authenticateToken = require('../middleware/authMiddleware');

router.get('/user', authenticateToken, UserController.getUser);

module.exports = router;
