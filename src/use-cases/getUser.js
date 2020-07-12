const { DateTime } = require('luxon');
const InexistentUserError = require('../errors/inexistentUserError');
const InvalidTokenError = require('../errors/invalidTokenError');
const InvalidSessionError = require('../errors/invalidSessionError');
const UserModel = require('../models/user');
const { isTokenValid } = require('../services/tokenService');

const exec = async ({ token, id }) => {
  const tokenValidity = await isTokenValid(token);
  if (tokenValidity === false) {
    throw new InvalidTokenError('Token has an invalid format');
  }
  const user = await UserModel.findOne({ guid: id });
  if (user === null) {
    throw new InexistentUserError('Usuário inexistente');
  }
  if (user.token === token) {
    const lastLogin = DateTime.fromISO(user.lastLogin.toISOString());
    const { minutes } = lastLogin.diffNow('minutes').toObject();
    const absoluteDifferenceInMinutes = Math.abs(minutes);
    if (absoluteDifferenceInMinutes < 30) {
      const savedUser = await user.save();
      return savedUser;
    }
    throw new InvalidSessionError();
  }
  throw new InvalidTokenError('Invalid token for this user');
};

module.exports = { exec };
