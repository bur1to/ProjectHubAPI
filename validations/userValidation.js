const Joi = require('joi');

const userCreateValidation = (data) => {
  const createValidation = Joi.object({
    nickname: Joi.string().min(2).required(),
    email: Joi.string().email().required(),
    password: Joi.string().pattern(/^[a-zA-Z0-9!@#$%^&*]{8,30}$/).required()
  });

  return createValidation.validateAsync(data);
};

const userUpdateValidation = (data) => {
  const updateValidation = Joi.object({
    nickname: Joi.string().min(2),
    email: Joi.string().email(),
    password: Joi.string().pattern(/^[a-zA-Z0-9!@#$%^&*]{8,30}$/)
  });

  return updateValidation.validateAsync(data);
};

module.exports = {
  userCreateValidation,
  userUpdateValidation
};
