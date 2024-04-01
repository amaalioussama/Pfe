const UsersModel = require('../models/Users');

const getUser = async (req, res) => {
  try {
    const userId = req.user.userId; 
    const user = await UsersModel.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ username: user.username });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ error: 'An error occurred while fetching user information' });
  }
};

module.exports = {
  getUser
};
