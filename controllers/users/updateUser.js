const crypto = require('crypto');
const User = require('../../models/userModel');
const { userUpdateValidation } = require('../../validations/userValidation');

const updateProfileInfo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { body } = req;

    const validatedParams = await userUpdateValidation(body);

    if (body.password) {
      const salt = crypto.randomBytes(16).toString('hex');

      validatedParams.password = crypto.pbkdf2Sync(validatedParams.password, salt, 1000, 64, 'sha512')
        .toString('hex');
      validatedParams.salt = salt;
    }

    const updatedInfo = await User.findByIdAndUpdate(id, validatedParams, { new: true });

    res.status(200).json(updatedInfo);
  } catch (err) {
    next(err);
  }
};

module.exports = updateProfileInfo;
