const UserModel = require('../models/user');

const UserSignUp = require('./userSignUp');

const inputUserModel = {
  name: 'Teste',
  email: 'teste@teste.com',
  password: 'teste234',
  phones: [{ number: '123456789', areaCode: '11' }],
};

const mockedUserModel = new UserModel(inputUserModel);

const expectedUserModel = {
  name: 'Teste',
  email: 'teste@teste.com',
  phones: [{ number: '123456789', areaCode: '11' }],
};

describe('User sign up tests', () => {
  it('should sign up new user successfully', async () => {
    jest.spyOn(UserModel.prototype, 'save')
      .mockReturnValue(mockedUserModel);
    const signedUpUser = await UserSignUp.exec(inputUserModel);
    expect(signedUpUser.toJSON()).toMatchObject(expectedUserModel);
  });
});
