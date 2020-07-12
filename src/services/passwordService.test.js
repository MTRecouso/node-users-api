const bcrypt = require('bcrypt');
const { hashPassword, checkPassword } = require('./passwordService');

const password = 'senha234';

describe('Hash password tests', () => {
  it('hash password according to expected', async () => {
    const hashedPassword = await hashPassword(password);
    const arePasswordsEqual = await bcrypt.compare(password, hashedPassword);
    expect(arePasswordsEqual).toBe(true);
  });

  it('Check hashed password', async () => {
    const hashedPassword = await hashPassword(password);
    const arePasswordsEqual = await checkPassword(password, hashedPassword);
    expect(arePasswordsEqual).toBe(true);
  });
});
