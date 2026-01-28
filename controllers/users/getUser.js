const User = require('../../models/userModel');

const getUserProfile = async (req, res, next) => {
  try {
    const { id } = req.params;

    const profile = await User.findOne({ _id: id }, {
      nickname: 1
    });

    if (!profile) {
      throw new Error('User not found');
    }

    res.status(200).json(profile);
  } catch (err) {
    next(err);
  }
};

module.exports = getUserProfile;
