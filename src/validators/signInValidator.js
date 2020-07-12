const { checkSchema } = require('express-validator');

module.exports = checkSchema({
  email: {
    // The location of the field, can be one or more of body, cookies, headers, params or query.
    // If omitted, all request locations will be checked
    in: ['body'],
    errorMessage: 'Email inválido',
    isEmail: true,
  },
  senha: {
    // The location of the field, can be one or more of body, cookies, headers, params or query.
    // If omitted, all request locations will be checked
    in: ['body'],
    errorMessage: 'Senha inválida',
    isString: true,
  },
});
