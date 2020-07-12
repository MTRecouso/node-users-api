const Status = require('http-status');
const FieldAlreadyExistsError = require('./fieldAlreadyExistsError');

// eslint-disable-next-line no-unused-vars
module.exports = (err, req, res, next) => {
  if (err instanceof FieldAlreadyExistsError) {
    res.status(Status.CONFLICT).json({
      mensagem: 'E-mail já existente',
    });
  } else {
    res.status(Status.INTERNAL_SERVER_ERROR).json({
      mensagem: 'Um erro inesperado aconteceu',
    });
  }
};
