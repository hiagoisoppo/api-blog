const { userService } = require('../services');
const httpStatusMap = require('../utils/httpStatusMap');

const create = async (req, res) => {
  const response = await userService.create({ ...req.body });
  return res.status(httpStatusMap(response.statusCode)).json(response.data);
};

const listAll = async (_req, res) => {
  const response = await userService.listAll();
  return res.status(httpStatusMap(response.statusCode)).json(response.data);
};

const find = async (req, res) => {
  const { id } = req.params;
  const response = await userService.findById(id);
  return res.status(httpStatusMap(response.statusCode)).json(response.data);
};

const destroy = async (req, res) => {
  const { user } = req;
  const response = await userService.destroy(user.id);
  return res.status(httpStatusMap(response.statusCode)).send();
};

module.exports = {
  create,
  listAll,
  find,
  destroy,
};