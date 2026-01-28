const Joi = require('joi');

const memberAddValidation = (data) => {
  const addValidation = Joi.object({
    email: Joi.string().email().required()
  });

  return addValidation.validateAsync(data);
};

module.exports = memberAddValidation;
