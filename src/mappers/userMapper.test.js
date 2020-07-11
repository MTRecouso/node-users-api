const UserMapper = require('./userMapper');

const inputUserModel = {
  name: 'Teste',
  email: 'teste@teste.com',
  phones: [{ number: '123456789', areaCode: '11' }],
  updatedAt: new Date(),
  createdAt: new Date(),
  lastLogin: new Date(),
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
  guid: '979b4a5f-32ea-4c9e-9be3-1984d316ab94',
};

const expectedUserModel = {
  name: 'Teste',
  email: 'teste@teste.com',
  password: 'teste234',
  phones: [{ number: '123456789', areaCode: '11' }],
};

const httpRequestUser = {
  nome: 'Teste',
  email: 'teste@teste.com',
  senha: 'teste234',
  telefones: [{ numero: '123456789', ddd: '11' }],
};

const httpResponseUser = {
  nome: 'Teste',
  email: 'teste@teste.com',
  telefones: [{ numero: '123456789', ddd: '11' }],
  id: expect.any(String),
  data_criacao: expect.any(Date),
  data_atualizacao: expect.any(Date),
  ultimo_login: expect.any(Date),
  token: expect.any(String),
};

describe('User mapper tests', () => {
  it('Map http user to model user', () => {
    const mappedUser = UserMapper.httpToModel(httpRequestUser);
    expect(mappedUser).toEqual(expectedUserModel);
  });

  it('Map model user to http user', () => {
    const mappedUser = UserMapper.modelToHttp(inputUserModel);
    expect(mappedUser).toEqual(httpResponseUser);
  });
});
