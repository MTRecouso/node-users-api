const mongoose = require('mongoose');
const UserModel = require('./user.js');
const FieldAlreadyExistsError = require('../errors/fieldAlreadyExistsError');

const userData = {
  name: 'Teste',
  email: 'teste@teste.com',
  phones: [{ number: '123456789', areaCode: '11' }],
};

const createdUser = {
  ...userData,
  token: expect.any(String),
  createdAt: expect.any(Date),
  updatedAt: expect.any(Date),
  lastLogin: expect.any(Date),
  guid: expect.any(String),
};

describe('User Model Tests', () => {
  let userToken;
  let userGuid;
  let originalHashedPassword;

  beforeAll(async () => {
    await mongoose.connect(
      process.env.MONGO_URL,
      { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
      (err) => {
        if (err) {
          process.exit(1);
        }
      },
    );
  });

  it('should create & save user successfully', async () => {
    const user = new UserModel({ password: 'teste234', ...userData });
    const savedUser = await user.save();
    userGuid = savedUser.guid;
    userToken = savedUser.token;
    originalHashedPassword = savedUser.password;
    expect(savedUser.toJSON()).toMatchObject(createdUser);
  });

  it('should fail on user creation because email already exists', async () => {
    try {
      const user = new UserModel({ password: 'teste234', ...userData });
      await user.save();
    } catch (err) {
      expect(err instanceof FieldAlreadyExistsError).toBe(true);
    }
  });

  it('should update user email and password without interfering on token and guid', async () => {
    const newEmail = 'teste2@teste.com';
    const newPassword = 'teste345';
    const user = await UserModel.findOne({ guid: userGuid });
    user.email = newEmail;
    user.password = newPassword;
    const updatedUser = await user.save();
    expect(updatedUser.email).toBe(newEmail);
    expect(updatedUser.password).not.toBe(originalHashedPassword);
    expect(updatedUser.guid).toBe(userGuid);
    expect(updatedUser.token).toBe(userToken);
  });
});

afterAll(async () => {
  await mongoose.disconnect();
});
