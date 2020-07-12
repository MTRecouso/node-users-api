const { Router } = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const UserController = require('../controllers/userController');
const UserValidator = require('../validators/userValidator');
const SignInValidator = require('../validators/signInValidator');
const GetUserValidator = require('../validators/getUserValidator');
const validate = require('../validators/validate');
const errorHandler = require('../errors/errorHandler');

const router = Router();
const apiRouter = Router();
apiRouter
  .use(cors())
  .use(bodyParser.json());

apiRouter.route('/users')
  .post(UserValidator, validate, UserController.signUp);

apiRouter.route('/users/:id')
  .get(GetUserValidator, validate, UserController.getUser);

apiRouter.route('/users/signin')
  .post(SignInValidator, validate, UserController.signIn);

router.use('/api', apiRouter);

router.use(errorHandler);
router.use('*', (req, res) => {
  res.status(404).json({ mensagem: 'Endpoint não encontrado' });
});

module.exports = router;
