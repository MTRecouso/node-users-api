const { checkSchema } = require('express-validator');

module.exports = checkSchema({
  id: {
    in: ['params'],
    errorMessage: 'Id inválido',
    isString: true,
  },
  Authorization: {
    in: ['headers'],
    matches: /Bearer */,
    errorMessage: 'Token inválido',
    isString: true,
    isLength: { options: { min: 8 } },
    customSanitizer: {
      options: (value) => (value.length > 0
        ? value.substring(7, value.length)
        : ''),
    },
  },
});
