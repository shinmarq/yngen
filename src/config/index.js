/**
 * @Config
 * you can add additional config keys/values
 */
const { connection } = require('./database');

const config = {
  PORT: process.env.PORT || 3000,
  ENV: process.env.NODE_ENV || 'development',
  DB: process.env.DB,
};

exports.config = config;
exports.connection = connection;
