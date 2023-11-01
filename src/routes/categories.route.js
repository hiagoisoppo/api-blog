const router = require('express').Router();
const { categoriesController } = require('../controllers');
const { validateJwtAuth, validateJwtUser } = require('../middlewares');

// router.get('/', validateJwtAuth, validateJwtUser, userController.listAll);

// router.get('/:id', validateJwtAuth, validateJwtUser, userController.find);

router.post('/', validateJwtAuth, validateJwtUser, categoriesController.create);

module.exports = router;