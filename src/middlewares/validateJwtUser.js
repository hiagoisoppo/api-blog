const { userService } = require('../services');
const httpStatusMap = require('../utils/httpStatusMap');

module.exports = async (req, res, next) => {
  const { user } = req;
  const response = await userService.findById(user.id);

  if (response.statusCode !== 'SUCCESSFUL') {
    return res.status(httpStatusMap(response.statusCode)).json(response.data);
  }
  
  next();
};