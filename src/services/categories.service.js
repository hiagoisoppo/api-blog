const { Category } = require('../models');
const { createSchema } = require('../validations/categories.schemas');

// const findById = async (id) => {
//   const user = await User.findByPk(id, {
//     attributes: { exclude: ['password'] },
//   });

//   if (!user) {
//     return { statusCode: 'NOT_FOUND', data: { message: 'User does not exist' } };
//   }

//   return { statusCode: 'SUCCESSFUL', data: user };
// };

const create = async ({ name }) => {
  const { error } = createSchema.validate({ name });
  if (error) return { statusCode: 'BAD_REQUEST', data: { message: error.message } };

  const category = await Category.create({ name });

  return { statusCode: 'CREATED', data: category };
};

// const listAll = async () => {
//   const users = await User.findAll({ attributes: { exclude: ['password'] } });
//   return { statusCode: 'SUCCESSFUL', data: users };
// };

module.exports = {
  create,
};