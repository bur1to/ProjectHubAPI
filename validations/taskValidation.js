const Joi = require('joi');

const taskCreateValidation = (data) => {
  const createValidation = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    status: Joi.string().valid('todo', 'in-progress', 'done').default('todo')
  });

  return createValidation.validateAsync(data);
};

const taskUpdateValidation = (data) => {
  const updateValidation = Joi.object({
    title: Joi.string(),
    description: Joi.string(),
    status: Joi.string().valid('todo', 'in-progress', 'done'),
  });

  return updateValidation.validateAsync(data);
};

module.exports = {
  taskCreateValidation,
  taskUpdateValidation
};
