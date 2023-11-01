const { userService } = require('../services');
const httpStatusMap = require('../utils/httpStatusMap');

const create = async (req, res) => {
  const response = await userService.create({ ...req.body });
  return res.status(httpStatusMap(response.statusCode)).json(response.data);
};

module.exports = {
  create,
};