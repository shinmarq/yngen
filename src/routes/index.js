const { root } = require('./root');
const { user } = require('./user');

exports.routes = server => {
  root(server);
  user(server);
};
