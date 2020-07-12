const jwt = require('jsonwebtoken');

exports.isTokenValid = async (token) => {
  try {
    await jwt.verify(token, process.env.JWT_SECRET);
    return true;
  } catch (err) {
    return false;
  }
};
