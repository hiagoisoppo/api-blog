const { userService } = require('../services');
const httpStatusMap = require('../utils/httpStatusMap');

module.exports = async (req, res, next) => {
  const { user } = req;
  const userFound = await userService.findById(user.id);

  if (!userFound) {
    res.status(httpStatusMap('NOT_FOUND')).json({ message: 'User not found' });
  }
  
  next();
};