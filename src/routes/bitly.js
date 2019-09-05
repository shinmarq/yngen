const bitly = require('../controller/bitly');

const bitlyRoutes = server => {
  server.route({
    method: 'POST',
    path: '/api/url-shortener',
    handler: bitly.shortenedUrl,
  });
};

exports.bitly = bitlyRoutes;
