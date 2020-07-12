const UserModel = require('../models/user');
const passwordService = require('../services/passwordService');
const InexistentUserError = require('../errors/inexistentUserError');
const InvalidPasswordError = require('../errors/invalidPasswordError');

const exec = async ({ email, password }) => {
  const user = await UserModel.findOne({ email });
  if (!user) {
    throw new InexistentUserError('Usuário e/ou senha inválidos');
  }
  const isPasswordCorrect = await passwordService.checkPassword(password, user.password);
  if (isPasswordCorrect) {
    user.lastLogin = new Date();
    const savedUser = await user.save();
    return savedUser;
  }
  throw new InvalidPasswordError();
};

module.exports = { exec };
