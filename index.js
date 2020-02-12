'use strict';

const { createServer, proxy } = require('aws-serverless-express');

module.exports = app => {
  const server = createServer(app.callback());
  return (event, ctx) => { proxy(server, event, ctx); };
};
