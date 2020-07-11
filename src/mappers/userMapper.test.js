const UserMapper = require('./userMapper');

const modelUser = {
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
};

describe('User mapper tests', () => {
  it('Map http user to model user', () => {
    const mappedUser = UserMapper.httpToModel(httpRequestUser);
    expect(mappedUser).toEqual(modelUser);
  });

  it('Map model user to http user', () => {
    const mappedUser = UserMapper.modelToHttp(modelUser);
    expect(mappedUser).toMatchObject(httpResponseUser);
  });
});
