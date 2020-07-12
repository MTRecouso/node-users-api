const { checkSchema } = require('express-validator');

module.exports = checkSchema({
  email: {
    in: ['body'],
    errorMessage: 'Email inválido',
    isEmail: true,
  },
  nome: {
    in: ['body'],
    errorMessage: 'Nome inválido',
    isString: true,
  },
  senha: {
    in: ['body'],
    errorMessage: 'Senha inválida',
    isString: true,
  },
  telefones: {
    in: ['body'],
    errorMessage: 'Telefones inválidos',
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
