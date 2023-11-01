const router = require('express').Router();
const { postController } = require('../controllers');
const { validateJwtAuth, validateJwtUser } = require('../middlewares');

router.get('/', validateJwtAuth, validateJwtUser, postController.listAll);

// router.get('/:id', validateJwtAuth, validateJwtUser, userController.find);

router.post('/', validateJwtAuth, validateJwtUser, postController.create);

module.exports = router;