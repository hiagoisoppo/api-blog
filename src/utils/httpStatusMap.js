const httpErrorMap = {
  SUCCESSFUL: 200,
  CREATED: 201,
  NOT_FOUND: 404,
  CONFLICT: 409,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NO_CONTENT: 204,
};

const mapStatusHTTP = (status) => httpErrorMap[status] || 500;

module.exports = mapStatusHTTP;