const user = require('../controller/user-controller');

const userRoutes = server => {
  const apiDir = '/api/v1';

  server.route({
    method: 'POST',
    path: `${apiDir}/create`,
    handler: user.createUser,
  });

  server.route({
    method: 'POST',
    path: `${apiDir}/delete/{user}`,
    handler: user.deleteUser,
  });

  server.route({
    method: 'GET',
    path: `${apiDir}/find/{user}`,
    handler: user.findUser,
  });

  server.route({
    method: 'GET',
    path: `${apiDir}/find`,
    handler: user.findUsers,
  });
};

exports.user = userRoutes;
