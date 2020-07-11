const mongoose = require('mongoose');
const UserModel = require('./user.js');

const userData = {
  name: 'Teste',
  email: 'teste@teste.com',
  password: 'teste234',
  phones: [{ number: '123456789', areaCode: '11' }],
};

describe('User Model Tests', () => {
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
    const user = new UserModel(userData);
    const savedUser = await user.save();
    expect(savedUser._id).toBeDefined();
    expect(savedUser.name).toBe(userData.name);
    expect(savedUser.email).toBe(userData.email);
    expect(savedUser.password).toBe(userData.password);
    expect(savedUser.phones[0].number).toEqual(userData.phones[0].number);
    expect(savedUser.phones[0].areaCode).toEqual(userData.phones[0].areaCode);
  });

  it('should fail on user creation because email already exists', async () => {
    try {
      const user = new UserModel(userData);
      await user.save();
    } catch (err) {
      const dupKeyErrorMatcher = /E11000 duplicate key error/;
      expect(err.message).toMatch(dupKeyErrorMatcher);
    }
  });
});

afterAll(async () => {
  await mongoose.disconnect();
});
