const { loginService } = require('../services');
const httpStatusMap = require('../utils/httpStatusMap');

const login = async (req, res) => {
  const { email, password } = req.body;
  const response = await loginService.login({ email, password });

  return res.status(httpStatusMap(response.statusCode)).json(response.data);
};

module.exports = {
  login,
};