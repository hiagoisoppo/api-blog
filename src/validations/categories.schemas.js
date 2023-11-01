const Joi = require('joi');

const createSchema = Joi.object({
  name: Joi.string().required(),
});

module.exports = {
  createSchema,
};