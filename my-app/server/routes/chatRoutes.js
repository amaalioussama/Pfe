const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

router.post('/savechat', chatController.saveChat);
router.get('/history/:date', chatController.getChatHistoryByDate);

module.exports = router;
