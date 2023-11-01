const { Category } = require('../models');
const { createSchema } = require('../validations/categories.schemas');

const create = async ({ name }) => {
  const { error } = createSchema.validate({ name });
  if (error) return { statusCode: 'BAD_REQUEST', data: { message: error.message } };

  const category = await Category.create({ name });

  return { statusCode: 'CREATED', data: category };
};

const listAll = async () => {
  const categories = await Category.findAll({
    order: [['id', 'ASC']],
  });
  return { statusCode: 'SUCCESSFUL', data: categories };
};

module.exports = {
  create,
  listAll,
};