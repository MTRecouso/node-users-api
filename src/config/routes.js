const { Router } = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const UserController = require('../controllers/userController');

const router = Router();
const apiRouter = Router();
apiRouter
  .use(cors())
  .use(bodyParser.json());
router.route('/users')
  .post(UserController.signUp);

router.use('/api', apiRouter);
