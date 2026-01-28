const User = require('../../models/userModel');

const getAllUsers = async (req, res, next) => {
  try {
    const allUsers = await User.find({}, { nickname: 1, email: 1 });

    res.status(200).json(allUsers);
  } catch (err) {
    next(err);
  }
};

module.exports = getAllUsers;
