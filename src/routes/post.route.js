const router = require('express').Router();
const { postController } = require('../controllers');
const { validateJwtAuth, validateJwtUser } = require('../middlewares');

router.get('/', validateJwtAuth, validateJwtUser, postController.listAll);

router.get('/:id', validateJwtAuth, validateJwtUser, postController.find);

router.post('/', validateJwtAuth, validateJwtUser, postController.create);

router.put('/:id', validateJwtAuth, validateJwtUser, postController.update);

module.exports = router;