const { Router } = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const UserController = require('../controllers/userController');
const UserValidator = require('../validators/userValidator');
const validate = require('../validators/validate');
const errorHandler = require('../errors/errorHandler');

const router = Router();
const apiRouter = Router();
apiRouter
  .use(cors())
  .use(bodyParser.json());

apiRouter.route('/users')
  .post(UserValidator, validate, UserController.signUp);

router.use('/api', apiRouter);

router.use(errorHandler);
router.use('*', (req, res) => {
  res.status(404).json({ mensagem: 'Endpoint não encontrado' });
});

module.exports = router;
