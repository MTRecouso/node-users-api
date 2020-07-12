# node-users-api

API de criação e autenticação de usuários

Setup local:
```
git clone https://github.com/MTRecouso/node-users-api.git
cd node-users-api
npm install
configurar conexão com MongoDB
npm start
```
Setup Docker:
```
git clone https://github.com/MTRecouso/node-users-api.git
cd node-users-api
docker compose build
docker compose up
```

Em ambos os setups, a API pode ser acessada pela url http://localhost:3000

# Rotas
- /api/users POST - Registra um novo usuário (sign up). Parametros: nome, email, senha, telefones (todos obrigatórios)
- /api/users/signin POST - Retorna o usuário de id especificado na url
- /api/users/:user_id GET - Retorna o usuário de id especificado na url. Requer o token do usuário enviado via Bearer Token
