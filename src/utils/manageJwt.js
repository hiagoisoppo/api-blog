const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.JWT_SECRET;

const generateJwToken = (payload) => jwt.sign(payload, SECRET_KEY);

const extractJwToken = (bearerToken) => bearerToken.split(' ')[1];

const validateJwToken = (token) => jwt.verify(token, SECRET_KEY);

module.exports = {
  generateJwToken,
  extractJwToken,
  validateJwToken,
};