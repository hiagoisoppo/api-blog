const router = require('express').Router();
const { userController } = require('../controllers');
const { validateJwtAuth, validateJwtUser } = require('../middlewares');

router.get('/', validateJwtAuth, validateJwtUser, userController.listAll);

router.post('/', userController.create);

module.exports = router;