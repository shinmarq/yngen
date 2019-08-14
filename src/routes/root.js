const root = server => {
  server.route({
    method: 'GET',
    path: '/',
    handler: (req, h) =>
      h.response({ success: true, message: 'OK.' }).code(200),
  });

  server.route({
    method: '*',
    path: '/{any*}',
    handler: (req, h) =>
      h
        .response({
          success: false,
          method: req.method,
          message: `Path '${req.path}' Not Found.`,
        })
        .code(404),
  });
};

exports.root = root;
