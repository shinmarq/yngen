/**
 * @Dependencies
 */
const Hapi = require('@hapi/hapi');
const dotenv = require('dotenv');

dotenv.config();

const { config } = require('./src/config');

const { routes } = require('./src/routes');

const init = async () => {
  const server = Hapi.Server({
    port: config.PORT,
    host: '0.0.0.0',
  });

  await server.start();
  routes(server);

  console.log('Server running on %ss', server.info.uri);
};

process.on('unhandledRejection', err => {
  console.log(err);
  process.exit(1);
});

// Initialize All
init();
