const mongoose = require('mongoose');
const uuid = require('uuid');

const { hashPassword } = require('../services/passwordService');

const { Schema } = mongoose;

const UserSchema = new Schema({
  guid: {
    type: String,
    required: true,
    immutable: true,
    default: uuid.v4(),
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
    select: false,
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
  },
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

UserSchema.pre('save', async function updatePasswordIfNeeded(next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await hashPassword(user.password);
  } else {
    next();
  }
});

module.exports = mongoose.model('User', UserSchema);
