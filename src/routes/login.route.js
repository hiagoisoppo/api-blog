const router = require('express').Router();
const { loginController } = require('../controllers');
const { validateLoginBody } = require('../middlewares');

router.post('/', validateLoginBody, loginController.login);

module.exports = router;