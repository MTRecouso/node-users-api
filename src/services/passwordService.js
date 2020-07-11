const bcrypt = require('bcrypt');

const SALT_ROUNDS = 8;

const hashPassword = async (password) => bcrypt.hash(password, SALT_ROUNDS);

const checkPassword = async (password, hash) => bcrypt.compare(password, hash);

module.exports = { hashPassword, checkPassword };
