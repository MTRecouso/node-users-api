const { checkSchema } = require('express-validator');

module.exports = checkSchema({
  email: {
    // The location of the field, can be one or more of body, cookies, headers, params or query.
    // If omitted, all request locations will be checked
    in: ['body'],
    errorMessage: 'Email inválido',
    isEmail: true,
  },
  nome: {
    // The location of the field, can be one or more of body, cookies, headers, params or query.
    // If omitted, all request locations will be checked
    in: ['body'],
    errorMessage: 'Nome inválido',
    isString: true,
  },
  senha: {
    // The location of the field, can be one or more of body, cookies, headers, params or query.
    // If omitted, all request locations will be checked
    in: ['body'],
    errorMessage: 'Senha inválida',
    isString: true,
  },
  telefones: {
    // The location of the field, can be one or more of body, cookies, headers, params or query.
    // If omitted, all request locations will be checked
    in: ['body'],
    errorMessage: 'ID is wrong',
    isArray: true,
    isLength: {
      options: { min: 1 },
    },
  },
  'telefones.*.numero': {
    isString: true,
  },
  'telefones.*.ddd': {
    isString: true,
  },
});
