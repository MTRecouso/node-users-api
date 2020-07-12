const { validationResult } = require('express-validator');
const ValidationError = require('../errors/validationError');

module.exports = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const invalidParams = errors.array().map((error) => error.param);
    const validationError = new ValidationError(`Parametros ${invalidParams.join(',')} inválidos`);
    next(validationError);
  } else {
    next();
  }
};
