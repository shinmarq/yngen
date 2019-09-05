const { root } = require('./root');
const { bitly } = require('./bitly');

exports.routes = server => {
  root(server);
  bitly(server);
};
