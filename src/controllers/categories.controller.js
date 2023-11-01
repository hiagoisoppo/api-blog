const { categoriesService } = require('../services');
const httpStatusMap = require('../utils/httpStatusMap');

const create = async (req, res) => {
  const response = await categoriesService.create({ ...req.body });
  return res.status(httpStatusMap(response.statusCode)).json(response.data);
};

const listAll = async (_req, res) => {
  const response = await categoriesService.listAll();
  return res.status(httpStatusMap(response.statusCode)).json(response.data);
};

// const find = async (req, res) => {
//   const { id } = req.params;
//   const response = await userService.findById(id);
//   return res.status(httpStatusMap(response.statusCode)).json(response.data);
// };

module.exports = {
  create,
  listAll,
};