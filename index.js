'use strict';

const { createServer, proxy } = require('aws-serverless-express');

module.exports = app => (event, ctx) => proxy(createServer(app.callback()), event, ctx);
