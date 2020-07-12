const { checkSchema } = require('express-validator');
const jwt = require('jsonwebtoken');

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
      options: (value) => value.substring(7, value.length),
    },
    custom: {
      options: async (token) => {
        await jwt.verify(token, process.env.JWT_SECRET);
      },
    },
  },
});
