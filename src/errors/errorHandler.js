const Status = require('http-status');
const FieldAlreadyExistsError = require('./fieldAlreadyExistsError');
const ValidationError = require('./validationError');
const InexistentUserError = require('./inexistentUserError');
const InvalidPasswordError = require('./invalidPasswordError');
const InvalidTokenError = require('./invalidTokenError');
const InvalidSessionError = require('./invalidSessionError');

// eslint-disable-next-line no-unused-vars
module.exports = (err, req, res, next) => {
  switch (err.constructor) {
    case FieldAlreadyExistsError:
      res.status(Status.CONFLICT).json({
        mensagem: 'E-mail já existente',
      });
      break;
    case ValidationError:
      res.status(Status.UNPROCESSABLE_ENTITY).json({
        mensagem: err.message,
      });
      break;
    case InexistentUserError:
      res.status(Status.NOT_FOUND).json({
        mensagem: err.message,
      });
      break;
    case InvalidPasswordError:
      res.status(Status.UNAUTHORIZED).json({
        mensagem: 'Usuário e/ou senha inválidos',
      });
      break;
    case InvalidTokenError:
      res.status(Status.UNAUTHORIZED).json({
        mensagem: 'Não autorizado',
      });
      break;
    case InvalidSessionError:
      res.status(Status.UNAUTHORIZED).json({
        mensagem: 'Sessão inválida',
      });
      break;
    default:
      console.log(err);
      res.status(Status.INTERNAL_SERVER_ERROR).json({
        mensagem: 'Um erro inesperado aconteceu',
      });
  }
};
