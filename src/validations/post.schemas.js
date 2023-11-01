const Joi = require('joi');

const createSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.array().items(Joi.number().required()).required(),
  userId: Joi.number().required(),
});

module.exports = {
  createSchema,
};