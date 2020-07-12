const UserMapper = require('../mappers/userMapper');
const UserSignUp = require('../use-cases/userSignUp');
const UserSignIn = require('../use-cases/userSignIn');

exports.signUp = async (req, res, next) => {
  try {
    const userModelData = UserMapper.httpToModel(req.body);
    const userModel = await UserSignUp.exec(userModelData);
    const signUpResponse = UserMapper.modelToHttp(userModel);
    res.json(signUpResponse);
  } catch (err) {
    next(err);
  }
};

exports.signIn = async (req, res, next) => {
  try {
    const userModelData = UserMapper.httpToModel(req.body);
    const userModel = await UserSignIn.exec(userModelData);
    const signUpResponse = UserMapper.modelToHttp(userModel);
    res.json(signUpResponse);
  } catch (err) {
    next(err);
  }
};
