const bcrypt = require('bcrypt');

const SALT_ROUNDS = 8;

exports.hashPassword = async (password) => bcrypt.hash(password, SALT_ROUNDS);

exports.checkPassword = async (password, hash) => bcrypt.compare(password, hash);
