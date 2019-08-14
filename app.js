/**
 * @Dependencies
 */
const Hapi = require('@hapi/hapi');
const dotenv = require('dotenv');

dotenv.config();

const { config, connection } = require('./src/config');

const { routes } = require('./src/routes');

const init = async () => {
  const server = Hapi.Server({
    port: config.PORT,
    host: '0.0.0.0',
  });

  await server.start();
  connection(config.DB);
  routes(server);

  console.log('Server running on %ss', server.info.uri);
};

process.on('unhandledRejection', err => {
  console.log(err);
  process.exit(1);
});

init();
