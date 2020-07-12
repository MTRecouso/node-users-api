const { checkSchema } = require('express-validator');

module.exports = checkSchema({
  email: {
    in: ['body'],
    errorMessage: 'Email inválido',
    isEmail: true,
  },
  senha: {
    in: ['body'],
    errorMessage: 'Senha inválida',
    isString: true,
  },
});
