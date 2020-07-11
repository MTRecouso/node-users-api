const UserMapper = require('../mappers/userMapper');
const UserSignUp = require('../use-cases/userSignUp');

exports.signUp = async (req, res) => {
  const userModelData = UserMapper.httpToModel(req.body);
  const userModel = await UserSignUp.exec(userModelData);
  const signUpResponse = UserMapper.modelToHttp(userModel);
  res.json(signUpResponse);
};
