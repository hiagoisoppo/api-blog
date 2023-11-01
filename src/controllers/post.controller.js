const { postService } = require('../services');
const httpStatusMap = require('../utils/httpStatusMap');

const create = async (req, res) => {
  const { user } = req;
  const response = await postService.create({ ...req.body, userId: user.id });
  return res.status(httpStatusMap(response.statusCode)).json(response.data);
};

const listAll = async (_req, res) => {
  const response = await postService.listAll();
  return res.status(httpStatusMap(response.statusCode)).json(response.data);
};

const find = async (req, res) => {
  const { id } = req.params;
  const response = await postService.findById(id);
  return res.status(httpStatusMap(response.statusCode)).json(response.data);
};

module.exports = {
  create,
  listAll,
  find,
};