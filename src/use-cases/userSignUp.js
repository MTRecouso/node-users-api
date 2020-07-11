const UserModel = require('../models/user');

const exec = async (userModelData) => {
  const user = new UserModel(userModelData);
  const savedUser = await user.save();
  return savedUser;
};

module.exports = { exec };
