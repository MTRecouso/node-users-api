const UserMapper = require('../mappers/userMapper');
const UserSignUp = require('../use-cases/userSignUp');
const UserSignIn = require('../use-cases/userSignIn');
const GetUser = require('../use-cases/getUser');

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
    const signInResponse = UserMapper.modelToHttp(userModel);
    res.json(signInResponse);
  } catch (err) {
    next(err);
  }
};

exports.getUser = async (req, res, next) => {
  try {
    const authorizationHeader = req.get('Authorization');
    console.log(authorizationHeader);
    const { id } = req.params;
    const userModel = await GetUser.exec({ id, authorizationHeader });
    const getUserResponse = UserMapper.modelToHttp(userModel);
    res.json(getUserResponse);
  } catch (err) {
    next(err);
  }
};
