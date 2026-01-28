const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const User = require('../../models/userModel');

const login = async (req, res, next) => {
  try {
    const { body } = req;

    const user = await User.findOne({ email: body.email });

    if (!user) {
      throw new Error("User don't exist or incorrect email");
    }

    const { salt } = user;
    const hashedPassword = crypto.pbkdf2Sync(body.password, salt, 1000, 64, 'sha512').toString('hex');

    if (user.password !== hashedPassword) {
      throw new Error('Incorrect password');
    }

    const { _id } = user;

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
      message: 'Login is successful',
      token
    });
  } catch (err) {
    next(err);
  }
};

module.exports = login;
