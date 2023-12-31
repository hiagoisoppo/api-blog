const { loginService } = require('../services');
const httpStatusMap = require('../utils/httpStatusMap');

const login = async (req, res) => {
  const response = await loginService.login({ ...req.body });
  return res.status(httpStatusMap(response.statusCode)).json(response.data);
};

module.exports = {
  login,
};