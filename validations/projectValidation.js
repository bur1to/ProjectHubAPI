const Joi = require('joi');

const projectCreateValidation = (data) => {
  const createValidation = Joi.object({
    title: Joi.string().required()
  });

  return createValidation.validateAsync(data);
};

const projectUpdateValidation = (data) => {
  const updateValidation = Joi.object({
    title: Joi.string()
  });

  return updateValidation.validateAsync(data);
};

module.exports = {
  projectCreateValidation,
  projectUpdateValidation
};
