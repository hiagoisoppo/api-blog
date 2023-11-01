const { User } = require('../models');
const { generateJwToken } = require('../utils/manageJwt');

const login = async ({ email, password }) => {
  const user = await User.findOne({
    where: { email, password },
    attributes: { exclude: ['password'] },
  });

  if (!user) return { statusCode: 'BAD_REQUEST', data: { message: 'Invalid fields' } };

  const token = generateJwToken({ ...user.dataValues });
  return { statusCode: 'SUCCESSFUL', data: { token } };
};

module.exports = {
  login,
};