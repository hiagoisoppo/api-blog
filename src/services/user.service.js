const { User } = require('../models');
const { generateJwToken } = require('../utils/manageJwt');
const { createSchema } = require('../validations/user.schemas');

const findByEmail = async (email) => {
  const user = await User.findOne({
    where: { email },
    attributes: { exclude: ['password'] },
  });
  return user;
};

const create = async ({ displayName, email, password, image = '' }) => {
  const newUser = { displayName, email, password, image };

  const { error } = createSchema.validate(newUser);
  if (error) return { statusCode: 'BAD_REQUEST', data: { message: error.message } };

  const userExists = await findByEmail(email);
  if (userExists) return { statusCode: 'CONFLICT', data: { message: 'User already registered' } };

  const user = await User.create(newUser, {
    attributes: { exclude: ['password'] },
  });

  const token = generateJwToken({ ...user.dataValues });
  return { statusCode: 'CREATED', data: { token } };
};

module.exports = {
  create,
  findByEmail,
};