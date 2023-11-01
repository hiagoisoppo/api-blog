const httpStatusMap = require('../utils/httpStatusMap');
const { extractJwToken, validateJwToken } = require('../utils/manageJwt');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || authorization === '') {
    return res.status(httpStatusMap('UNAUTHORIZED'))
      .json({ message: 'Token not found' });
  }

  try {
    const token = extractJwToken(authorization);
    const user = validateJwToken(token);
    req.user = user;
    next();
  } catch (err) {
    return res.status(httpStatusMap('UNAUTHORIZED')).json({ message: 'Expired or invalid token' });
  }
};