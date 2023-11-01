const httpStatusMap = require('../utils/httpStatusMap');

module.exports = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(httpStatusMap('BAD_REQUEST'))
      .json({ message: 'Some required fields are missing' });
  }

  next();
};