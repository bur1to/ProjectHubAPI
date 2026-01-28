const User = require('../../models/userModel');

const removeUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    await User.deleteOne({ _id: id });

    res.status(200).json({
      message: 'User successfully removed'
    });
  } catch (err) {
    next(err);
  }
};

module.exports = removeUser;
