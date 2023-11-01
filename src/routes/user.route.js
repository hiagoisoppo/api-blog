const router = require('express').Router();
const { userController } = require('../controllers');
const { validateJwtAuth, validateJwtUser } = require('../middlewares');

router.get('/', validateJwtAuth, validateJwtUser, userController.listAll);

router.get('/:id', validateJwtAuth, validateJwtUser, userController.find);

router.post('/', userController.create);

module.exports = router;