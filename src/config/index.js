/**
 * @Config
 * you can add additional config keys/values
 */

const config = {
  PORT: process.env.PORT || 3000,
  ENV: process.env.NODE_ENV || 'development',
};

exports.config = config;
