const mongoose = require('mongoose');
const uuid = require('uuid');
const jwt = require('jsonwebtoken');

const { hashPassword } = require('../services/passwordService');

const { Schema } = mongoose;

const UserSchema = new Schema({
  guid: {
    type: String,
    immutable: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phones: {
    type: [{ number: String, areaCode: String }],
    required: true,
  },
  lastLogin: {
    type: Date,
    required: true,
    default: Date.now,
  },
  token: {
    type: String,
    required: true,
    default: jwt.sign({ id: this.guid }, process.env.JWT_SECRET),
  },
}, { timestamps: true });

UserSchema.pre('save', async function updatePasswordIfNeeded(next) {
  const user = this;
  if (user.isNew === true) {
    user.guid = uuid.v4();
    user.token = jwt.sign({ id: user.guid }, process.env.JWT_SECRET);
  }
  if (user.isModified('password')) {
    user.password = await hashPassword(user.password);
  }
  next();
});

module.exports = mongoose.model('User', UserSchema);
