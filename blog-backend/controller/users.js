const User = require('../models/User');

// Get User 
const getUser = async (req, res) => {
    try {
      const user = await User.findById(req.params.userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong' });
    }
  };

  module.exports = { getUser }