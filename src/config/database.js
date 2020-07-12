const mongoose = require('mongoose');

exports.init = async () => {
  const mongooseConfigs = { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true };
  mongoose.Promise = global.Promise;
  await mongoose.connect(process.env.MONGO_URL, mongooseConfigs);
};
