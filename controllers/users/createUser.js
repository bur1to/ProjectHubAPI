const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const User = require('../../models/userModel');
const { userCreateValidation } = require('../../validations/userValidation');

const registration = async (req, res, next) => {
  try {
    const { body } = req;

    const validParams = await userCreateValidation(body);

    const userExist = await User.findOne({ email: validParams.email });

    if (userExist) {
      return res.status(403).send('User is already exist. Please login');
    }

    const salt = crypto.randomBytes(16).toString('hex');

    validParams.password = crypto.pbkdf2Sync(validParams.password, salt, 1000, 64, 'sha512').toString('hex');
    validParams.salt = salt;

    const newUser = await User.create(validParams);

    const { _id } = newUser;

    const userData = {
      _id: newUser._id,
      nickname: newUser.nickname,
      email: newUser.email
    };

    const token = jwt.sign(
      {
        userId: _id
      },
      `${process.env.TOKEN_KEY}`,
      {
        expiresIn: '2h'
      }
    );

    res.status(200).json({
      userData,
      token
    });
  } catch (err) {
    next(err);
  }
};

module.exports = registration;
