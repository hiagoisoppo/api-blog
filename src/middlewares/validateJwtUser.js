const { userService } = require('../services');
const httpStatusMap = require('../utils/httpStatusMap');

module.exports = async (req, res, next) => {
  const { id } = req.user;

  const user = await userService.findById(id);

  if (!user) {
    res.status(httpStatusMap('NOT_FOUND')).json({ message: 'User not found' });
  }
  
  next();
};