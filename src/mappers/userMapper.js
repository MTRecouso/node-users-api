exports.httpToModel = (httpUser) => ({
  name: httpUser.nome,
  email: httpUser.email,
  password: httpUser.senha,
  phones: httpUser.telefones.map(({ numero, ddd }) => ({ number: numero, areaCode: ddd })),
});

exports.modelToHttp = (modelUser) => ({
  nome: modelUser.name,
  email: modelUser.email,
  telefones: modelUser.phones.map(({ number, areaCode }) => ({ numero: number, ddd: areaCode })),
  id: modelUser.guid,
  data_criacao: modelUser.createdAt,
  data_atualizacao: modelUser.updatedAt,
  ultimo_login: modelUser.lastLogin,
  token: modelUser.token,
});
